import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as mockData from './mockData';

// Initialize mock adapter
const mock = new MockAdapter(axios, { delayResponse: 500 });

// Helper to get/set local storage data
const getDB = (key) => {
  const data = localStorage.getItem(`sgei_${key}`);
  if (data) return JSON.parse(data);
  const initialData = mockData[`initial_${key}`] || [];
  localStorage.setItem(`sgei_${key}`, JSON.stringify(initialData));
  return initialData;
};

const setDB = (key, data) => {
  localStorage.setItem(`sgei_${key}`, JSON.stringify(data));
};

// Initialize all databases on load
const collections = ['users', 'students', 'parents', 'messages', 'message_recipients', 'groups', 'templates', 'attendance', 'help_requests', 'alert_rules', 'communications', 'fees', 'grades'];
collections.forEach(col => getDB(col));

// Fake JWT helper
const generateToken = (user) => btoa(JSON.stringify(user));

const getUserFromHeader = (config) => {
  const token = config.headers.Authorization?.split(' ')[1];
  if (!token) return null;
  try {
    return JSON.parse(atob(token));
  } catch(e) {
    return null;
  }
};

// --- AUTH ---
mock.onPost('/api/v1/auth/login').reply(config => {
  const { email, password } = JSON.parse(config.data);
  const users = getDB('users');
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return [401, { error: 'Invalid credentials' }];
  
  const { password: _, ...userWithoutPassword } = user;
  return [200, { token: generateToken(userWithoutPassword), user: userWithoutPassword }];
});

// --- PORTAL ---
mock.onGet('/api/v1/portal/inbox').reply(config => {
  const user = getUserFromHeader(config);
  if (!user) return [401, { error: 'Unauthorized' }];
  
  const recipients = getDB('message_recipients');
  const messages = getDB('messages');
  
  const userRecipients = recipients.filter(r => r.recipient_id === user.id);
  const userMessages = userRecipients.map(r => {
    const msg = messages.find(m => m.id === r.message_id) || {};
    return { ...msg, read: r.read, read_at: r.read_at };
  });
  
  return [200, userMessages.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))];
});

mock.onGet(/\/api\/v1\/portal\/inbox\/\d+/).reply(config => {
  const id = parseInt(config.url.split('/').pop());
  const user = getUserFromHeader(config);
  
  const recipients = getDB('message_recipients');
  const index = recipients.findIndex(r => r.message_id === id && r.recipient_id === user.id);
  
  if (index !== -1) {
    recipients[index].read = true;
    recipients[index].read_at = new Date().toISOString();
    setDB('message_recipients', recipients);
  }
  return [200, { success: true }];
});

mock.onGet('/api/v1/portal/attendance').reply(config => {
  const user = getUserFromHeader(config);
  if (!user?.linked_student_id) return [400, { error: 'No student linked' }];
  
  const attendance = getDB('attendance');
  const studentRecords = attendance.filter(a => a.student_id === user.linked_student_id);
  return [200, studentRecords];
});

mock.onGet('/api/v1/portal/help').reply(config => {
  const user = getUserFromHeader(config);
  const help = getDB('help_requests');
  return [200, help.filter(h => h.user_id === user.id).sort((a,b) => new Date(b.created_at) - new Date(a.created_at))];
});

mock.onPost('/api/v1/portal/help').reply(config => {
  const user = getUserFromHeader(config);
  const { subject, message } = JSON.parse(config.data);
  const help = getDB('help_requests');
  
  const newReq = {
    id: Date.now(),
    user_id: user.id,
    subject,
    message,
    status: 'open',
    created_at: new Date().toISOString()
  };
  
  help.push(newReq);
  setDB('help_requests', help);
  return [201, newReq];
});

// --- ADMIN / TEMPLATES ---
mock.onGet('/api/v1/templates').reply(() => [200, getDB('templates')]);

mock.onPost('/api/v1/templates').reply(config => {
  const template = JSON.parse(config.data);
  const templates = getDB('templates');
  template.id = Date.now();
  template.created_at = new Date().toISOString();
  templates.push(template);
  setDB('templates', templates);
  return [201, template];
});

mock.onPut(/\/api\/v1\/templates\/\d+/).reply(config => {
  const id = parseInt(config.url.split('/').pop());
  const update = JSON.parse(config.data);
  const templates = getDB('templates');
  const index = templates.findIndex(t => t.id === id);
  if (index !== -1) {
    templates[index] = { ...templates[index], ...update, updated_at: new Date().toISOString() };
    setDB('templates', templates);
  }
  return [200, templates[index]];
});

mock.onDelete(/\/api\/v1\/templates\/\d+/).reply(config => {
  const id = parseInt(config.url.split('/').pop());
  const templates = getDB('templates').filter(t => t.id !== id);
  setDB('templates', templates);
  return [200, { success: true }];
});

// --- ADMIN / GROUPS ---
mock.onGet('/api/v1/groups').reply(() => [200, getDB('groups')]);
mock.onPost('/api/v1/groups').reply(config => {
  const group = JSON.parse(config.data);
  const groups = getDB('groups');
  group.id = Date.now();
  groups.push(group);
  setDB('groups', groups);
  return [201, group];
});

// --- ADMIN / MESSAGES & DASHBOARD ---
mock.onGet('/api/v1/messages').reply(() => {
  const messages = getDB('messages');
  return [200, messages.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))];
});

mock.onPost('/api/v1/messages').reply(config => {
  const user = getUserFromHeader(config);
  const data = JSON.parse(config.data);
  const messages = getDB('messages');
  const recipients = getDB('message_recipients');
  
  const newMsg = {
    id: Date.now(),
    sender_id: user.id,
    subject: data.subject,
    body: data.body,
    type: data.type || 'email',
    created_at: new Date().toISOString(),
    status: 'sent'
  };
  messages.push(newMsg);
  
  // Fake recipients logic
  const users = getDB('users');
  const targetUsers = users.filter(u => u.role !== 'super_admin'); // Send to everyone else
  
  targetUsers.forEach(tu => {
    recipients.push({
      id: Date.now() + Math.random(),
      message_id: newMsg.id,
      recipient_id: tu.id,
      read: false,
      type: data.type || 'email'
    });
  });
  
  setDB('messages', messages);
  setDB('message_recipients', recipients);
  return [201, newMsg];
});

mock.onGet('/api/v1/dashboard/stats').reply(() => [200, {
  total_messages_sent: getDB('messages').length,
  total_students: getDB('students').length,
  active_alerts: 2,
  delivery_rate: 98.5
}]);

mock.onGet('/api/v1/reports/stats').reply(() => [200, {
  delivery_rate: 98.5,
  total_sent: getDB('messages').length,
  total_failed: 2,
  total_read: getDB('message_recipients').filter(r => r.read).length
}]);

// --- ADMIN / ATTENDANCE ---
mock.onGet('/api/v1/attendance').reply(config => {
  const { class_name, date } = config.params || {};
  let att = getDB('attendance');
  if (date) att = att.filter(a => a.date === date);
  const students = getDB('students');
  
  const result = students.filter(s => !class_name || s.class_name === class_name).map(s => {
    const record = att.find(a => a.student_id === s.id);
    return {
      student_id: s.id,
      name: s.name,
      roll_number: s.roll_number,
      status: record ? record.status : 'present',
      notes: record ? record.notes : ''
    };
  });
  return [200, result];
});

mock.onPost('/api/v1/attendance/bulk').reply(config => {
  const { date, records, class_name } = JSON.parse(config.data);
  let att = getDB('attendance');
  
  // Remove existing for this date/class (simplified)
  att = att.filter(a => a.date !== date); 
  
  records.forEach(r => {
    att.push({
      id: Date.now() + Math.random(),
      student_id: r.student_id,
      date,
      status: r.status,
      notes: r.notes || '',
      recorded_by: 1,
      recorded_at: new Date().toISOString()
    });
  });
  
  setDB('attendance', att);
  return [200, { success: true }];
});

mock.onGet('/api/v1/alert-rules').reply(() => [200, getDB('alert_rules')]);

// --- ADMIN / HELP REQUESTS ---
mock.onGet('/api/v1/help').reply(() => {
  const help = getDB('help_requests');
  const users = getDB('users');
  const students = getDB('students');
  
  const populated = help.map(h => {
    const user = users.find(u => u.id === h.user_id) || {};
    const res = { ...h, user_name: user.name, user_email: user.email, user_role: user.role, user_phone: user.contact_phone };
    if (user.linked_student_id) {
      const student = students.find(s => s.id === user.linked_student_id);
      if (student) {
        res.student_name = student.name;
        res.student_class = student.class_name;
        res.student_roll = student.roll_number;
      }
    }
    return res;
  });
  return [200, populated.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))];
});

mock.onPatch(/\/api\/v1\/help\/\d+\/status/).reply(config => {
  const id = parseInt(config.url.split('/')[4]);
  const { status } = JSON.parse(config.data);
  const help = getDB('help_requests');
  const index = help.findIndex(h => h.id === id);
  if (index !== -1) {
    help[index].status = status;
    setDB('help_requests', help);
  }
  return [200, help[index]];
});

// --- AI MOCK ---
mock.onPost('/api/v1/ai/suggest').reply(config => {
  const { subject } = JSON.parse(config.data);
  return [200, {
    suggestion: `<p>Dear Parents,</p><p>This is a simulated AI generated message regarding: <strong>${subject}</strong>.</p><p>Please note that the AI generator operates in Demo Mode on this static site.</p><p>Regards,<br/>Sri Gowthami Admin</p>`
  }];
});

// Pass through all other requests (like assets)
mock.onAny().passThrough();

console.log('Mock Backend Initialized for Serverless Mode');

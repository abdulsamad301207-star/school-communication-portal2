const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { read, write } = require('../db');

// Get all help requests (Admin/Staff only)
router.get('/', auth(['super_admin', 'staff']), (req, res) => {
  const requests = read('help_requests');
  const users = read('users');
  const students = read('students');
  
  // Attach full user details to each request
  const populatedRequests = requests.map(r => {
    const user = users.find(u => u.id === r.user_id) || {};
    const result = {
      ...r,
      user_name: user.name || 'Unknown User',
      user_email: user.email || 'N/A',
      user_role: user.role || 'N/A',
      user_phone: user.contact_phone || 'N/A'
    };
    // If the sender is a parent or student, include linked student info
    if (user.linked_student_id) {
      const student = students.find(s => s.id === user.linked_student_id);
      if (student) {
        result.student_name = student.name;
        result.student_class = student.class_name;
        result.student_roll = student.roll_number;
      }
    }
    return result;
  });
  
  res.json(populatedRequests.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
});

// Update help request status
router.patch('/:id/status', auth(['super_admin', 'staff']), (req, res) => {
  const { status } = req.body;
  if (!status) return res.status(400).json({ error: 'Status is required' });
  
  const requests = read('help_requests');
  const index = requests.findIndex(r => r.id === parseInt(req.params.id));
  
  if (index === -1) return res.status(404).json({ error: 'Request not found' });
  
  requests[index].status = status;
  write('help_requests', requests);
  
  res.json(requests[index]);
});

module.exports = router;

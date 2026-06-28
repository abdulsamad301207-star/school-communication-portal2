// Auto-generated mock data from backend/data

export const initial_alert_rules = [
  { "id": 1, "rule_name": "First Warning", "threshold_percent": 85, "template_id": 2, "channels": ["inapp", "email"], "cooldown_days": 7, "is_active": true },
  { "id": 2, "rule_name": "Critical Warning", "threshold_percent": 75, "template_id": 2, "channels": ["inapp", "email"], "cooldown_days": 3, "is_active": true }
]
;

export const initial_attendance = [
  {
    "id": 1,
    "student_id": 1,
    "date": "2026-06-01",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 2,
    "student_id": 1,
    "date": "2026-06-02",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 3,
    "student_id": 1,
    "date": "2026-06-03",
    "status": "absent",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 4,
    "student_id": 1,
    "date": "2026-06-04",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 5,
    "student_id": 1,
    "date": "2026-06-05",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 6,
    "student_id": 1,
    "date": "2026-06-08",
    "status": "absent",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 7,
    "student_id": 1,
    "date": "2026-06-09",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 8,
    "student_id": 1,
    "date": "2026-06-10",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 9,
    "student_id": 1,
    "date": "2026-06-11",
    "status": "absent",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 10,
    "student_id": 2,
    "date": "2026-06-01",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 11,
    "student_id": 2,
    "date": "2026-06-02",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 12,
    "student_id": 2,
    "date": "2026-06-03",
    "status": "present",
    "marked_by": 2,
    "period": "Full Day"
  },
  {
    "id": 13,
    "student_id": 1,
    "date": "2026-06-27",
    "status": "present",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 14,
    "student_id": 2,
    "date": "2026-06-27",
    "status": "absent",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 15,
    "student_id": 11,
    "date": "2026-06-27",
    "status": "absent",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 16,
    "student_id": 12,
    "date": "2026-06-27",
    "status": "present",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 17,
    "student_id": 13,
    "date": "2026-06-27",
    "status": "present",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 18,
    "student_id": 1,
    "date": "",
    "status": "present",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 19,
    "student_id": 2,
    "date": "",
    "status": "present",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 20,
    "student_id": 11,
    "date": "",
    "status": "absent",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 21,
    "student_id": 12,
    "date": "",
    "status": "absent",
    "marked_by": 1,
    "period": "Full Day"
  },
  {
    "id": 22,
    "student_id": 13,
    "date": "",
    "status": "present",
    "marked_by": 1,
    "period": "Full Day"
  }
];

export const initial_communications = [
  {
    "id": "c_init_1",
    "student_id": "s2",
    "type": "Attendance Alert",
    "priority": "High",
    "channel": "Email",
    "template": "Low Attendance Notice",
    "message": "Dear Harshad Patel, this is to inform you that Priya Patel's attendance is currently 50.00%, which is below the minimum threshold of 75%. Please contact the administration.",
    "status": "Delivered",
    "sent_at": "2026-06-08T10:30:00.000Z"
  },
  {
    "id": "c_init_2",
    "student_id": "s3",
    "type": "Fee Reminder",
    "priority": "Medium",
    "channel": "WhatsApp",
    "template": "Outstanding Fees Reminder",
    "message": "Dear Sunil Verma, Priya Patel has an outstanding balance of $800.00 due by 2026-06-15. Kindly clear it at the earliest.",
    "status": "Sent",
    "sent_at": "2026-06-08T11:15:00.000Z"
  },
  {
    "id": "c_init_3",
    "student_id": "s7",
    "type": "Fee Reminder",
    "priority": "High",
    "channel": "Email",
    "template": "Outstanding Fees Reminder",
    "message": "URGENT: Dear Anil Kapoor, Arjun Kapoor has an outstanding balance of $1300.00 which is OVERDUE since 2026-06-10. Prompt action required.",
    "status": "Delivered",
    "sent_at": "2026-06-09T09:00:00.000Z"
  },
  {
    "id": "c_1780987389897_1jkka",
    "student_id": "s2",
    "type": "Attendance Alert",
    "priority": "High",
    "channel": "Email",
    "template": "Low Attendance Notice",
    "message": "Dear Harshad Patel,\n\nThis is to inform you that Priya Patel's attendance is currently 50%, which is below the minimum threshold of 75%. Prompt action and explanation are required. Please contact the class teacher.\n\nRegards,\nCampus Admin",
    "status": "Processing",
    "sent_at": "2026-06-09T06:43:09.897Z"
  },
  {
    "id": "c_1781000692274_2d8cd",
    "student_id": "s2",
    "type": "Attendance Alert",
    "priority": "High",
    "channel": "Email",
    "template": "Low Attendance Notice",
    "message": "Dear Harshad Patel,\n\nThis is to inform you that Priya Patel's attendance is currently 50%, which is below the minimum threshold of 75%. Prompt action and explanation are required. Please contact the class teacher.\n\nRegards,\nCampus Admin",
    "status": "Processing",
    "sent_at": "2026-06-09T10:24:52.274Z"
  },
  {
    "id": "c_1781165880352_46z3l",
    "student_id": "s2",
    "type": "Attendance Alert",
    "priority": "High",
    "channel": "Email",
    "template": "Low Attendance Notice",
    "message": "Dear Harshad Patel,\n\nThis is to inform you that Priya Patel's attendance is currently 50%, which is below the minimum threshold of 75%. Prompt action and explanation are required. Please contact the class teacher.\n\nRegards,\nCampus Admin",
    "status": "Processing",
    "sent_at": "2026-06-11T08:18:00.352Z"
  },
  {
    "id": "c_1781166003755_bfveo",
    "student_id": "s2",
    "type": "Attendance Alert",
    "priority": "High",
    "channel": "Email",
    "template": "Low Attendance Notice",
    "message": "Dear Harshad Patel,\n\nThis is to inform you that Priya Patel's attendance is currently 50%, which is below the minimum threshold of 75%. Prompt action and explanation are required. Please contact the class teacher.\n\nRegards,\nCampus Admin",
    "status": "Processing",
    "sent_at": "2026-06-11T08:20:03.755Z"
  }
];

export const initial_fees = [
  {
    "student_id": "s1",
    "total_due": 1200,
    "paid": 1200,
    "balance": 0,
    "due_date": "2026-06-15"
  },
  {
    "student_id": "s2",
    "total_due": 1200,
    "paid": 1000,
    "balance": 200,
    "due_date": "2026-06-15"
  },
  {
    "student_id": "s3",
    "total_due": 1200,
    "paid": 400,
    "balance": 800,
    "due_date": "2026-06-15"
  },
  {
    "student_id": "s4",
    "total_due": 1500,
    "paid": 1500,
    "balance": 0,
    "due_date": "2026-06-15"
  },
  {
    "student_id": "s5",
    "total_due": 1500,
    "paid": 1500,
    "balance": 0,
    "due_date": "2026-06-15"
  },
  {
    "student_id": "s6",
    "total_due": 1500,
    "paid": 1200,
    "balance": 300,
    "due_date": "2026-06-15"
  },
  {
    "student_id": "s7",
    "total_due": 1800,
    "paid": 500,
    "balance": 1300,
    "due_date": "2026-06-10"
  },
  {
    "student_id": "s8",
    "total_due": 1800,
    "paid": 1800,
    "balance": 0,
    "due_date": "2026-06-15"
  },
  {
    "student_id": "s9",
    "total_due": 1800,
    "paid": 1800,
    "balance": 0,
    "due_date": "2026-06-15"
  },
  {
    "student_id": "s10",
    "total_due": 1800,
    "paid": 1800,
    "balance": 0,
    "due_date": "2026-06-15"
  }
];

export const initial_grades = [
  {
    "student_id": "s1",
    "subject": "Mathematics",
    "marks": 85,
    "grade": "A"
  },
  {
    "student_id": "s1",
    "subject": "Science",
    "marks": 78,
    "grade": "B"
  },
  {
    "student_id": "s1",
    "subject": "English",
    "marks": 90,
    "grade": "A"
  },
  {
    "student_id": "s2",
    "subject": "Mathematics",
    "marks": 62,
    "grade": "C"
  },
  {
    "student_id": "s2",
    "subject": "Science",
    "marks": 55,
    "grade": "D"
  },
  {
    "student_id": "s2",
    "subject": "English",
    "marks": 70,
    "grade": "B"
  },
  {
    "student_id": "s3",
    "subject": "Mathematics",
    "marks": 45,
    "grade": "E"
  },
  {
    "student_id": "s3",
    "subject": "Science",
    "marks": 50,
    "grade": "D"
  },
  {
    "student_id": "s3",
    "subject": "English",
    "marks": 61,
    "grade": "C"
  },
  {
    "student_id": "s4",
    "subject": "Mathematics",
    "marks": 92,
    "grade": "A+"
  },
  {
    "student_id": "s4",
    "subject": "Science",
    "marks": 95,
    "grade": "A+"
  },
  {
    "student_id": "s4",
    "subject": "English",
    "marks": 88,
    "grade": "A"
  },
  {
    "student_id": "s5",
    "subject": "Mathematics",
    "marks": 74,
    "grade": "B"
  },
  {
    "student_id": "s5",
    "subject": "Science",
    "marks": 81,
    "grade": "A"
  },
  {
    "student_id": "s5",
    "subject": "English",
    "marks": 72,
    "grade": "B"
  },
  {
    "student_id": "s6",
    "subject": "Mathematics",
    "marks": 38,
    "grade": "F"
  },
  {
    "student_id": "s6",
    "subject": "Science",
    "marks": 42,
    "grade": "E"
  },
  {
    "student_id": "s6",
    "subject": "English",
    "marks": 55,
    "grade": "D"
  },
  {
    "student_id": "s7",
    "subject": "Mathematics",
    "marks": 80,
    "grade": "A"
  },
  {
    "student_id": "s7",
    "subject": "Science",
    "marks": 84,
    "grade": "A"
  },
  {
    "student_id": "s7",
    "subject": "English",
    "marks": 75,
    "grade": "B"
  },
  {
    "student_id": "s8",
    "subject": "Mathematics",
    "marks": 95,
    "grade": "A+"
  },
  {
    "student_id": "s8",
    "subject": "Science",
    "marks": 92,
    "grade": "A+"
  },
  {
    "student_id": "s8",
    "subject": "English",
    "marks": 90,
    "grade": "A"
  },
  {
    "student_id": "s9",
    "subject": "Mathematics",
    "marks": 68,
    "grade": "B"
  },
  {
    "student_id": "s9",
    "subject": "Science",
    "marks": 70,
    "grade": "B"
  },
  {
    "student_id": "s9",
    "subject": "English",
    "marks": 82,
    "grade": "A"
  },
  {
    "student_id": "s10",
    "subject": "Mathematics",
    "marks": 88,
    "grade": "A"
  },
  {
    "student_id": "s10",
    "subject": "Science",
    "marks": 91,
    "grade": "A+"
  },
  {
    "student_id": "s10",
    "subject": "English",
    "marks": 85,
    "grade": "A"
  }
];

export const initial_groups = [
  { "id": 1, "name": "All Parents", "description": "All registered parent accounts", "member_count": 348 },
  { "id": 2, "name": "All Students", "description": "All enrolled students", "member_count": 500 },
  { "id": 3, "name": "Fee Defaulters", "description": "Students with pending fees", "member_count": 42 },
  { "id": 4, "name": "Low Attendance", "description": "Students below 85% attendance", "member_count": 18 },
  { "id": 5, "name": "Class 10A Parents", "description": "Parents of Class 10A students", "member_count": 38 },
  { "id": 6, "name": "Class 10B Parents", "description": "Parents of Class 10B students", "member_count": 36 }
]
;

export const initial_help_requests = [
  {
    "id": 1,
    "user_id": 1,
    "subject": "Test Subject",
    "message": "Test from backend check",
    "status": "resolved",
    "created_at": "2026-06-27T11:03:11.528Z"
  },
  {
    "id": 2,
    "user_id": 1,
    "subject": "Test",
    "message": "Hello",
    "status": "resolved",
    "created_at": "2026-06-27T11:03:50.850Z"
  },
  {
    "id": 3,
    "user_id": 5,
    "subject": "Bug Test Request",
    "message": "Testing help request submission",
    "status": "resolved",
    "created_at": "2026-06-27T11:53:03.272Z"
  },
  {
    "id": 4,
    "user_id": 5,
    "subject": "Test",
    "message": "Hello",
    "status": "resolved",
    "created_at": "2026-06-27T11:54:35.594Z"
  }
];

export const initial_messages = [
  {
    "id": 1,
    "subject": "Fee Reminder — July 2026",
    "message_type": "fee",
    "body_html": "<p>Dear Parent,</p><p>This is a reminder that the <strong>fee for July 2026</strong> is due by <strong>15th July 2026</strong>. Kindly ensure timely payment to avoid late charges.</p><p>Amount Due: ₹12,500</p><p>Regards,<br/>Sri Gowthami Institutions</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-10T09:30:00Z",
    "created_at": "2026-06-10T09:00:00Z",
    "recipients_count": 348,
    "delivered_count": 341
  },
  {
    "id": 2,
    "subject": "Annual Sports Day — 20th June 2026",
    "message_type": "event",
    "body_html": "<p>Dear Parents and Students,</p><p>We are pleased to announce the <strong>Annual Sports Day</strong> on <strong>20th June 2026</strong> at the school grounds.</p><p>Students are requested to wear their sports uniform. Parents are cordially invited.</p><p>Event timings: 9:00 AM – 1:00 PM</p>",
    "attachment_url": null,
    "sender_id": 2,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-08T10:00:00Z",
    "created_at": "2026-06-08T09:30:00Z",
    "recipients_count": 500,
    "delivered_count": 498
  },
  {
    "id": 3,
    "subject": "Attendance Alert — Low Attendance Warning",
    "message_type": "attendance",
    "body_html": "<p>Dear Parent,</p><p>This is to inform you that your child's attendance has fallen below <strong>85%</strong>. Current attendance: <strong>78%</strong>.</p><p>Please ensure regular attendance. Further absence may require a written explanation.</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-09T18:00:00Z",
    "created_at": "2026-06-09T17:45:00Z",
    "recipients_count": 18,
    "delivered_count": 18
  },
  {
    "id": 4,
    "subject": "Unit Test — Schedule for June 2026",
    "message_type": "exam",
    "body_html": "<p>Dear Parents and Students,</p><p>The <strong>Unit Test</strong> for June 2026 is scheduled as follows:</p><ul><li>Mathematics — 15 June</li><li>Science — 16 June</li><li>English — 17 June</li><li>Social Studies — 18 June</li></ul><p>Students must carry their ID cards.</p>",
    "attachment_url": null,
    "sender_id": 2,
    "status": "scheduled",
    "scheduled_at": "2026-06-28T08:00:00Z",
    "sent_at": null,
    "created_at": "2026-06-11T11:00:00Z",
    "recipients_count": 200,
    "delivered_count": 0
  },
  {
    "id": 5,
    "subject": "School Circular — Summer Uniform",
    "message_type": "circular",
    "body_html": "<p>Dear Parents,</p><p>With effect from <strong>15 June 2026</strong>, students are permitted to wear the <strong>summer uniform</strong>. Winter uniforms are optional until 30 June.</p><p>Please ensure uniforms are clean and properly ironed.</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-05T07:30:00Z",
    "created_at": "2026-06-05T07:00:00Z",
    "recipients_count": 500,
    "delivered_count": 499
  },
  {
    "id": 6,
    "subject": "Attendance Alert — Arjun Sharma (67%)",
    "message_type": "attendance",
    "body_html": "<p>Dear Parent, your child <strong>Arjun Sharma</strong>'s attendance is <strong>67%</strong>, below the 75% threshold.</p>",
    "sender_id": 1,
    "status": "sent",
    "sent_at": "2026-06-13T12:30:00Z",
    "created_at": "2026-06-13T12:30:00Z",
    "recipients_count": 1,
    "delivered_count": 1
  },
  {
    "id": 7,
    "subject": "E2E Validation Message 1782370434570",
    "message_type": "event",
    "body_html": "<p>Hello from E2E automated validation test!</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T06:53:54.576Z",
    "created_at": "2026-06-25T06:53:54.576Z",
    "recipients_count": 3,
    "delivered_count": 3
  },
  {
    "id": 8,
    "subject": "Test Notification from Teacher",
    "message_type": "event",
    "body_html": "Dear Parent,\n\nWe hope this message finds you well. Dear Parents, this is a test notification to verify delivery.\n\nThank you for your continued support and cooperation.\n\nWarm regards,\nSri Gowthami Educational Institutions\nMain Campus",
    "attachment_url": null,
    "sender_id": 2,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:12:01.007Z",
    "created_at": "2026-06-25T09:12:01.007Z",
    "recipients_count": 348,
    "delivered_count": 348
  },
  {
    "id": 9,
    "subject": "Fee Reminder — {{month}} {{year}}",
    "message_type": "fee",
    "body_html": "Dear Parent,\n\nWe hope this message finds you well. Dear Parent,This is a reminder that the fee for {{month}} {{year}} is due by {{due_date}}. Kindly ensure timely payment.Amount Due: ₹{{amount}}Regards,Sri Gowthami Institutions\n\nThank you for your continued support and cooperation.\n\nWarm regards,\nSri Gowthami Educational Institutions\nMain Campus",
    "attachment_url": null,
    "sender_id": 2,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:32:35.365Z",
    "created_at": "2026-06-25T09:32:35.365Z",
    "recipients_count": 848,
    "delivered_count": 848
  },
  {
    "id": 10,
    "subject": "Fee Reminder — {{month}} {{year}}",
    "message_type": "fee",
    "body_html": "Dear Parent,\n\nWe hope this message finds you well. Dear Parent,This is a reminder that the fee for {{month}} {{year}} is due by {{due_date}}. Kindly ensure timely payment.Amount Due: ₹{{amount}}Regards,Sri Gowthami Institutions\n\nThank you for your continued support and cooperation.\n\nWarm regards,\nSri Gowthami Educational Institutions\nMain Campus",
    "attachment_url": null,
    "sender_id": 2,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:32:36.987Z",
    "created_at": "2026-06-25T09:32:36.987Z",
    "recipients_count": 848,
    "delivered_count": 848
  },
  {
    "id": 11,
    "subject": "Fee Reminder — {{month}} {{year}}",
    "message_type": "fee",
    "body_html": "Dear Parent,\n\nWe hope this message finds you well. Dear Parent,This is a reminder that the fee for {{month}} {{year}} is due by {{due_date}}. Kindly ensure timely payment.Amount Due: ₹{{amount}}Regards,Sri Gowthami Institutions\n\nThank you for your continued support and cooperation.\n\nWarm regards,\nSri Gowthami Educational Institutions\nMain Campus",
    "attachment_url": null,
    "sender_id": 2,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:32:37.094Z",
    "created_at": "2026-06-25T09:32:37.094Z",
    "recipients_count": 848,
    "delivered_count": 848
  },
  {
    "id": 12,
    "subject": "Fee Reminder — {{month}} {{year}}",
    "message_type": "fee",
    "body_html": "Dear Parent,\n\nWe hope this message finds you well. Dear Parent,This is a reminder that the fee for {{month}} {{year}} is due by {{due_date}}. Kindly ensure timely payment.Amount Due: ₹{{amount}}Regards,Sri Gowthami Institutions\n\nThank you for your continued support and cooperation.\n\nWarm regards,\nSri Gowthami Educational Institutions\nMain Campus",
    "attachment_url": null,
    "sender_id": 2,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:32:37.862Z",
    "created_at": "2026-06-25T09:32:37.863Z",
    "recipients_count": 848,
    "delivered_count": 848
  },
  {
    "id": 13,
    "subject": "Annual Sports Meet 2026",
    "message_type": "event",
    "body_html": "<p>Dear Parents, Join us for the annual sports meet on Friday.</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:44:01.766Z",
    "created_at": "2026-06-25T09:44:01.766Z",
    "recipients_count": 5,
    "delivered_count": 5
  },
  {
    "id": 14,
    "subject": "Annual Sports Meet 2026",
    "message_type": "event",
    "body_html": "<p>Dear Parents, Join us for the annual sports meet on Friday.</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:44:24.548Z",
    "created_at": "2026-06-25T09:44:24.548Z",
    "recipients_count": 5,
    "delivered_count": 5
  },
  {
    "id": 15,
    "subject": "Exam Schedule — {{exam_name}}",
    "message_type": "exam",
    "body_html": "Dear Parents and Students,The {{exam_name}} is scheduled as per the timetable below. Students must carry their ID cards.{{timetable}}",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:51:35.627Z",
    "created_at": "2026-06-25T09:51:35.627Z",
    "recipients_count": 100,
    "delivered_count": 100
  },
  {
    "id": 16,
    "subject": "Fee Reminder — {{month}} {{year}}",
    "message_type": "fee",
    "body_html": "Dear Parent,This is a reminder that the fee for {{month}} {{year}} is due by {{due_date}}. Kindly ensure timely payment.Amount Due: ₹{{amount}}Regards,Sri Gowthami Institutions",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:51:51.022Z",
    "created_at": "2026-06-25T09:51:51.022Z",
    "recipients_count": 100,
    "delivered_count": 100
  },
  {
    "id": 17,
    "subject": "Fee Reminder — {{month}} {{year}}",
    "message_type": "fee",
    "body_html": "Dear Parent,This is a reminder that the fee for {{month}} {{year}} is due by {{due_date}}. Kindly ensure timely payment.Amount Due: ₹{{amount}}Regards,Sri Gowthami Institutions",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:51:53.086Z",
    "created_at": "2026-06-25T09:51:53.087Z",
    "recipients_count": 100,
    "delivered_count": 100
  },
  {
    "id": 18,
    "subject": "Attendance Alert — Low Attendance Warning",
    "message_type": "attendance",
    "body_html": "Dear Parent,\n\nWe hope this message finds you well. Dear Parent,Your child's attendance has fallen below {{threshold}}%. Current: {{current}}%.Please ensure regular attendance. Further absence may require explanation.\n\nThank you for your continued support and cooperation.\n\nWarm regards,\nSri Gowthami Educational Institutions\nMain Campus",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-25T09:53:33.782Z",
    "created_at": "2026-06-25T09:53:33.782Z",
    "recipients_count": 100,
    "delivered_count": 100
  },
  {
    "id": 19,
    "subject": "Attendance Alert — Low Attendance Warning",
    "message_type": "attendance",
    "body_html": "Dear Parent,\n\nWe hope this message finds you well. Dear Parent,Your child's attendance has fallen below {{threshold}}%. Current: {{current}}%.Please ensure regular attendance. Further absence may require explanation.\n\nThank you for your continued support and cooperation.\n\nWarm regards,\nSri Gowthami Educational Institutions\nMain Campus",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-27T06:52:16.333Z",
    "created_at": "2026-06-27T06:52:16.333Z",
    "recipients_count": 500,
    "delivered_count": 500
  },
  {
    "id": 20,
    "subject": "Annual Sports Meet 2026",
    "message_type": "event",
    "body_html": "<p>Dear Parents, Join us for the annual sports meet on Friday.</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-27T09:00:16.635Z",
    "created_at": "2026-06-27T09:00:16.635Z",
    "recipients_count": 5,
    "delivered_count": 5
  },
  {
    "id": 21,
    "subject": "Annual Sports Meet 2026",
    "message_type": "event",
    "body_html": "<p>Dear Parents, Join us for the annual sports meet on Friday.</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-27T09:11:12.564Z",
    "created_at": "2026-06-27T09:11:12.564Z",
    "recipients_count": 5,
    "delivered_count": 5
  },
  {
    "id": 22,
    "subject": "Test Circular",
    "message_type": "circular",
    "body_html": "Dear Parent, This is a test.",
    "attachment_url": null,
    "sender_id": 2,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-27T11:53:03.151Z",
    "created_at": "2026-06-27T11:53:03.151Z",
    "recipients_count": 0,
    "delivered_count": 0
  },
  {
    "id": 23,
    "subject": "Test",
    "message_type": "circular",
    "body_html": "Test",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-27T11:54:35.482Z",
    "created_at": "2026-06-27T11:54:35.482Z",
    "recipients_count": 0,
    "delivered_count": 0
  },
  {
    "id": 24,
    "subject": "Annual Sports Meet 2026",
    "message_type": "event",
    "body_html": "<p>Dear Parents, Join us for the annual sports meet on Friday.</p>",
    "attachment_url": null,
    "sender_id": 1,
    "status": "sent",
    "scheduled_at": null,
    "sent_at": "2026-06-27T18:18:54.303Z",
    "created_at": "2026-06-27T18:18:54.303Z",
    "recipients_count": 5,
    "delivered_count": 5
  }
];

export const initial_message_recipients = [
  {
    "id": 1,
    "message_id": 1,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-10T09:31:00Z",
    "read_at": "2026-06-10T10:05:00Z",
    "channel": "inapp"
  },
  {
    "id": 2,
    "message_id": 2,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-08T10:01:00Z",
    "read_at": "2026-06-25T09:15:30.701Z",
    "channel": "inapp"
  },
  {
    "id": 3,
    "message_id": 3,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-09T18:01:00Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 4,
    "message_id": 5,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-05T07:31:00Z",
    "read_at": "2026-06-05T08:00:00Z",
    "channel": "inapp"
  },
  {
    "id": 5,
    "message_id": 6,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-13T12:30:00.061Z",
    "read_at": "2026-06-27T06:51:15.840Z",
    "channel": "inapp"
  },
  {
    "id": 6,
    "message_id": 1,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-10T09:31:00Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 7,
    "message_id": 2,
    "user_id": 4,
    "delivery_status": "read",
    "delivered_at": "2026-06-08T10:01:00Z",
    "read_at": "2026-06-08T11:00:00Z",
    "channel": "inapp"
  },
  {
    "id": 8,
    "message_id": 5,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-05T07:31:00Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 9,
    "message_id": 2,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-08T10:01:00Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 10,
    "message_id": 5,
    "user_id": 5,
    "delivery_status": "read",
    "delivered_at": "2026-06-05T07:31:00Z",
    "read_at": "2026-06-05T08:30:00Z",
    "channel": "inapp"
  },
  {
    "id": 11,
    "message_id": 6,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-13T12:30:00.061Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 12,
    "message_id": 7,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-25T06:53:54.583Z",
    "read_at": "2026-06-25T06:53:54.622Z",
    "channel": "inapp"
  },
  {
    "id": 13,
    "message_id": 7,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T06:53:54.584Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 14,
    "message_id": 7,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T06:53:54.584Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 15,
    "message_id": 8,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:12:01.012Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 16,
    "message_id": 8,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:12:01.012Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 17,
    "message_id": 8,
    "user_id": 5,
    "delivery_status": "read",
    "delivered_at": "2026-06-25T09:12:01.012Z",
    "read_at": "2026-06-25T09:31:24.727Z",
    "channel": "inapp"
  },
  {
    "id": 18,
    "message_id": 9,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:35.367Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 19,
    "message_id": 9,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:35.367Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 20,
    "message_id": 9,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:35.367Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 21,
    "message_id": 10,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:36.989Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 22,
    "message_id": 10,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:36.989Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 23,
    "message_id": 10,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:36.989Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 24,
    "message_id": 11,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:37.095Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 25,
    "message_id": 11,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:37.095Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 26,
    "message_id": 11,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:37.095Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 27,
    "message_id": 12,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-25T09:32:37.864Z",
    "read_at": "2026-06-25T09:33:07.565Z",
    "channel": "inapp"
  },
  {
    "id": 28,
    "message_id": 12,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:37.864Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 29,
    "message_id": 12,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:32:37.864Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 30,
    "message_id": 13,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:44:01.768Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 31,
    "message_id": 13,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:44:01.768Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 32,
    "message_id": 13,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:44:01.768Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 33,
    "message_id": 14,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:44:24.551Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 34,
    "message_id": 14,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:44:24.551Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 35,
    "message_id": 14,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:44:24.551Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 36,
    "message_id": 15,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-25T09:51:35.629Z",
    "read_at": "2026-06-27T06:51:10.093Z",
    "channel": "inapp"
  },
  {
    "id": 37,
    "message_id": 15,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:51:35.629Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 38,
    "message_id": 15,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:51:35.629Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 39,
    "message_id": 16,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-25T09:51:51.026Z",
    "read_at": "2026-06-27T06:51:05.813Z",
    "channel": "inapp"
  },
  {
    "id": 40,
    "message_id": 16,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:51:51.026Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 41,
    "message_id": 16,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:51:51.026Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 42,
    "message_id": 17,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-25T09:51:53.090Z",
    "read_at": "2026-06-27T06:51:02.110Z",
    "channel": "inapp"
  },
  {
    "id": 43,
    "message_id": 17,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:51:53.090Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 44,
    "message_id": 17,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:51:53.090Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 45,
    "message_id": 18,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-25T09:53:33.797Z",
    "read_at": "2026-06-25T09:54:33.485Z",
    "channel": "inapp"
  },
  {
    "id": 46,
    "message_id": 18,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-25T09:53:33.797Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 47,
    "message_id": 18,
    "user_id": 5,
    "delivery_status": "read",
    "delivered_at": "2026-06-25T09:53:33.797Z",
    "read_at": "2026-06-27T06:51:32.036Z",
    "channel": "inapp"
  },
  {
    "id": 48,
    "message_id": 19,
    "user_id": 3,
    "delivery_status": "read",
    "delivered_at": "2026-06-27T06:52:16.339Z",
    "read_at": "2026-06-27T09:15:31.617Z",
    "channel": "inapp"
  },
  {
    "id": 49,
    "message_id": 19,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T06:52:16.339Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 50,
    "message_id": 19,
    "user_id": 5,
    "delivery_status": "read",
    "delivered_at": "2026-06-27T06:52:16.339Z",
    "read_at": "2026-06-27T06:52:46.115Z",
    "channel": "inapp"
  },
  {
    "id": 51,
    "message_id": 20,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T09:00:16.636Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 52,
    "message_id": 20,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T09:00:16.636Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 53,
    "message_id": 20,
    "user_id": 5,
    "delivery_status": "read",
    "delivered_at": "2026-06-27T09:00:16.636Z",
    "read_at": "2026-06-27T10:37:53.893Z",
    "channel": "inapp"
  },
  {
    "id": 54,
    "message_id": 21,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T09:11:12.565Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 55,
    "message_id": 21,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T09:11:12.565Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 56,
    "message_id": 21,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T09:11:12.565Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 57,
    "message_id": 22,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T11:53:03.153Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 58,
    "message_id": 22,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T11:53:03.153Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 59,
    "message_id": 22,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T11:53:03.153Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 60,
    "message_id": 23,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T11:54:35.484Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 61,
    "message_id": 23,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T11:54:35.484Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 62,
    "message_id": 23,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T11:54:35.484Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 63,
    "message_id": 24,
    "user_id": 3,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T18:18:54.306Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 64,
    "message_id": 24,
    "user_id": 4,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T18:18:54.306Z",
    "read_at": null,
    "channel": "inapp"
  },
  {
    "id": 65,
    "message_id": 24,
    "user_id": 5,
    "delivery_status": "delivered",
    "delivered_at": "2026-06-27T18:18:54.306Z",
    "read_at": null,
    "channel": "inapp"
  }
];

export const initial_parents = [
  {
    "id": "p1",
    "name": "Rajesh Sharma",
    "email": "rajesh.sharma@example.com",
    "phone": "+91 98765 43210",
    "relation": "Father"
  },
  {
    "id": "p2",
    "name": "Harshad Patel",
    "email": "harshad.patel@example.com",
    "phone": "+91 98765 43211",
    "relation": "Father"
  },
  {
    "id": "p3",
    "name": "Sunil Verma",
    "email": "sunil.verma@example.com",
    "phone": "+91 98765 43212",
    "relation": "Father"
  },
  {
    "id": "p4",
    "name": "Venkat Reddy",
    "email": "venkat.reddy@example.com",
    "phone": "+91 98765 43213",
    "relation": "Father"
  },
  {
    "id": "p5",
    "name": "Rajendra Singh",
    "email": "rajendra.singh@example.com",
    "phone": "+91 98765 43214",
    "relation": "Father"
  },
  {
    "id": "p6",
    "name": "Ramesh Iyer",
    "email": "ramesh.iyer@example.com",
    "phone": "+91 98765 43215",
    "relation": "Father"
  },
  {
    "id": "p7",
    "name": "Anil Kapoor",
    "email": "anil.kapoor@example.com",
    "phone": "+91 98765 43216",
    "relation": "Father"
  },
  {
    "id": "p8",
    "name": "Sandeep Mehta",
    "email": "sandeep.mehta@example.com",
    "phone": "+91 98765 43217",
    "relation": "Father"
  },
  {
    "id": "p9",
    "name": "Vijay Gupta",
    "email": "vijay.gupta@example.com",
    "phone": "+91 98765 43218",
    "relation": "Father"
  },
  {
    "id": "p10",
    "name": "Milind Joshi",
    "email": "milind.joshi@example.com",
    "phone": "+91 98765 43219",
    "relation": "Father"
  }
];

export const initial_students = [
  { "id": 1, "roll_number": "STU001", "name": "Arjun Sharma", "class_name": "10A", "parent_id": 3, "campus": "Main Campus" },
  { "id": 2, "roll_number": "STU002", "name": "Divya Patel", "class_name": "10A", "parent_id": 4, "campus": "Main Campus" },
  { "id": 3, "roll_number": "STU003", "name": "Karan Mehta", "class_name": "10B", "parent_id": null, "campus": "Main Campus" },
  { "id": 4, "roll_number": "STU004", "name": "Sneha Rao", "class_name": "9A", "parent_id": null, "campus": "Main Campus" },
  { "id": 5, "roll_number": "STU005", "name": "Rohan Gupta", "class_name": "9B", "parent_id": null, "campus": "Main Campus" },
  { "id": 6, "roll_number": "STU006", "name": "Anjali Kumar", "class_name": "8A", "parent_id": null, "campus": "Main Campus" },
  { "id": 7, "roll_number": "STU007", "name": "Vikram Singh", "class_name": "8B", "parent_id": null, "campus": "Main Campus" },
  { "id": 8, "roll_number": "STU008", "name": "Meera Joshi", "class_name": "7A", "parent_id": null, "campus": "Main Campus" },
  { "id": 9, "roll_number": "STU009", "name": "Aditya Nair", "class_name": "11A", "parent_id": null, "campus": "Main Campus" },
  { "id": 10, "roll_number": "STU010", "name": "Pooja Iyer", "class_name": "12A", "parent_id": null, "campus": "Main Campus" },
  { "id": 11, "roll_number": "STU011", "name": "Rahul Verma", "class_name": "10A", "parent_id": null, "campus": "Main Campus" },
  { "id": 12, "roll_number": "STU012", "name": "Neha Reddy", "class_name": "10A", "parent_id": null, "campus": "Main Campus" },
  { "id": 13, "roll_number": "STU013", "name": "Siddharth Bose", "class_name": "10A", "parent_id": null, "campus": "Main Campus" },
  { "id": 14, "roll_number": "STU014", "name": "Ananya Das", "class_name": "10B", "parent_id": null, "campus": "Main Campus" },
  { "id": 15, "roll_number": "STU015", "name": "Ravi Teja", "class_name": "10B", "parent_id": null, "campus": "Main Campus" },
  { "id": 16, "roll_number": "STU016", "name": "Kavya Menon", "class_name": "10B", "parent_id": null, "campus": "Main Campus" },
  { "id": 17, "roll_number": "STU017", "name": "Abhishek Dubey", "class_name": "9A", "parent_id": null, "campus": "Main Campus" },
  { "id": 18, "roll_number": "STU018", "name": "Simran Kaur", "class_name": "9A", "parent_id": null, "campus": "Main Campus" },
  { "id": 19, "roll_number": "STU019", "name": "Amit Desai", "class_name": "9B", "parent_id": null, "campus": "Main Campus" },
  { "id": 20, "roll_number": "STU020", "name": "Priya Nair", "class_name": "9B", "parent_id": null, "campus": "Main Campus" }
];

export const initial_templates = [
  { "id": 1, "name": "Fee Reminder Template", "message_type": "fee", "subject": "Fee Reminder — {{month}} {{year}}", "body_html": "<p>Dear Parent,</p><p>This is a reminder that the fee for <strong>{{month}} {{year}}</strong> is due by <strong>{{due_date}}</strong>. Kindly ensure timely payment.</p><p>Amount Due: ₹{{amount}}</p><p>Regards,<br/>Sri Gowthami Institutions</p>", "created_at": "2026-01-01T00:00:00Z" },
  { "id": 2, "name": "Attendance Alert Template", "message_type": "attendance", "subject": "Attendance Alert — Low Attendance Warning", "body_html": "<p>Dear Parent,</p><p>Your child's attendance has fallen below <strong>{{threshold}}%</strong>. Current: <strong>{{current}}%</strong>.</p><p>Please ensure regular attendance. Further absence may require explanation.</p>", "created_at": "2026-01-01T00:00:00Z" },
  { "id": 3, "name": "Exam Notice Template", "message_type": "exam", "subject": "Exam Schedule — {{exam_name}}", "body_html": "<p>Dear Parents and Students,</p><p>The <strong>{{exam_name}}</strong> is scheduled as per the timetable below. Students must carry their ID cards.</p><p>{{timetable}}</p>", "created_at": "2026-01-01T00:00:00Z" },
  { "id": 4, "name": "Event Notice Template", "message_type": "event", "subject": "Event Notice — {{event_name}}", "body_html": "<p>Dear Parents,</p><p>We are pleased to announce <strong>{{event_name}}</strong> on <strong>{{date}}</strong>. {{details}}</p><p>Parents are cordially invited.</p>", "created_at": "2026-01-01T00:00:00Z" }
]
;

export const initial_users = [
  {
    "id": 1,
    "name": "Abdul Latif",
    "email": "admin@sgei.edu.in",
    "password_hash": "$2b$10$rQZ9uAVKjBxPyLwMn2eH7u8Kg1vT3zRpNhEd4FXmW6oI5cYaJbC2e",
    "password_plain": "Admin@123",
    "role": "super_admin",
    "campus": "Main Campus",
    "contact_phone": "+91 98765 43210",
    "created_at": "2026-01-01T00:00:00Z"
  },
  {
    "id": 2,
    "name": "Mrs. Sonia Sen",
    "email": "teacher@sgei.edu.in",
    "password_hash": "$2b$10$rQZ9uAVKjBxPyLwMn2eH7u8Kg1vT3zRpNhEd4FXmW6oI5cYaJbC2e",
    "password_plain": "Teacher@123",
    "role": "staff",
    "campus": "Main Campus",
    "contact_phone": "+91 98765 11111",
    "created_at": "2026-01-02T00:00:00Z"
  },
  {
    "id": 3,
    "name": "Rajesh Sharma",
    "email": "rajesh.sharma@sgei.edu.in",
    "password_hash": "$2b$10$rQZ9uAVKjBxPyLwMn2eH7u8Kg1vT3zRpNhEd4FXmW6oI5cYaJbC2e",
    "password_plain": "Parent@123",
    "role": "parent",
    "campus": "Main Campus",
    "contact_phone": "+91 98765 22222",
    "linked_student_id": 1,
    "created_at": "2026-01-03T00:00:00Z"
  },
  {
    "id": 4,
    "name": "Priya Sharma",
    "email": "priya.sharma@sgei.edu.in",
    "password_hash": "$2b$10$rQZ9uAVKjBxPyLwMn2eH7u8Kg1vT3zRpNhEd4FXmW6oI5cYaJbC2e",
    "password_plain": "Parent@123",
    "role": "parent",
    "campus": "Main Campus",
    "contact_phone": "+91 98765 33333",
    "linked_student_id": 2,
    "created_at": "2026-01-03T00:00:00Z"
  },
  {
    "id": 5,
    "name": "Arjun Sharma",
    "email": "stu001@sgei.edu.in",
    "password_hash": "$2b$10$rQZ9uAVKjBxPyLwMn2eH7u8Kg1vT3zRpNhEd4FXmW6oI5cYaJbC2e",
    "password_plain": "Student@123",
    "role": "student",
    "campus": "Main Campus",
    "contact_phone": "",
    "linked_student_id": 1,
    "created_at": "2026-01-04T00:00:00Z"
  }
]
;


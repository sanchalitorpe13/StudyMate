const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

// GET /api/student/attendance/:studentId
router.get('/attendance/:studentId', async (req, res) => {
  try {
    const records = await Attendance.find({ student: req.params.studentId });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch attendance', error: error.message });
  }
});

module.exports = router;
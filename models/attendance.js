const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  attendedClasses: { type: Number, required: true, default: 0 },
  totalClasses: { type: Number, required: true, default: 0 },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
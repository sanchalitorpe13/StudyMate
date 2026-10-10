const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const Quiz = require('../models/Quiz');
const StudyMaterial = require('../models/StudyMaterial');

// POST /api/feedback
router.post('/feedback', async (req, res) => {
  try {
    const { subject, category, message, rating, userId } = req.body;
    const feedback = new Feedback({ subject, category, message, rating, user: userId });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit feedback', error: error.message });
  }
});

// GET /api/quizzes
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quizzes', error: error.message });
  }
});

// GET /api/materials
router.get('/materials', async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { type } : {};
    const materials = await StudyMaterial.find(filter);
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch materials', error: error.message });
  }
});

// POST /api/chatbot
router.post('/chatbot', (req, res) => {
  const { message } = req.body;
  const query = message ? message.toLowerCase() : '';

  let reply = "I'm here to help you with StudyMate! You can ask about attendance, quizzes, syllabus, or fees.";
  if (query.includes('attendance')) {
    reply = "You can view your attendance records in the Student Dashboard under the Attendance tab.";
  } else if (query.includes('fee') || query.includes('payment')) {
    reply = "Fee details and pending dues can be checked on the Fees page.";
  } else if (query.includes('quiz') || query.includes('test')) {
    reply = "Check the Quizzes or Mock Test section to attempt upcoming assessments.";
  }

  res.json({ reply });
});

module.exports = router;
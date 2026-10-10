const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./server/config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));
app.use('/api', require('./routes/commonRoutes'));

// Serve Static Frontend Files (No code modifications required on frontend)
app.use(express.static(path.join(__dirname, '.')));

// Fallback to home page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`StudyMate Backend running on http://localhost:${PORT}`);
});

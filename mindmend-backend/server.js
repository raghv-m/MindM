require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');  // Make sure the path is correct
const moodLogRoutes = require('./routes/moodLogRoutes');
const interactionRoutes = require('./routes/interactionRoutes');

const app = express();
app.use(express.json());  // To parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/users', userRoutes);  // User routes
app.use('/api/moods', moodLogRoutes);  // Mood log routes
app.use('/api/interactions', interactionRoutes);  // Interaction routes

app.get('/', (req, res) => {
  res.send('MindMend API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

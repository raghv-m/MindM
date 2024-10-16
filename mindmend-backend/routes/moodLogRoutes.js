const express = require('express');
const MoodLog = require('../models/moodLog');
const router = express.Router();

// Log a new mood entry
router.post('/log', async (req, res) => {
  const { userId, mood, note } = req.body;

  try {
    // Create a new mood log
    const moodLog = new MoodLog({
      user: userId,
      mood,
      note,
    });

    await moodLog.save();
    res.status(201).json({ message: 'Mood logged successfully', moodLog });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;

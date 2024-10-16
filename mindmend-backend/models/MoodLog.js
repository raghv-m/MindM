const mongoose = require('mongoose');

const moodLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mood: {
    type: String,  // e.g., happy, sad, anxious, etc.
    required: true,
  },
  note: {
    type: String,  // Optional note describing mood
  },
  loggedAt: {
    type: Date,
    default: Date.now,
  },
});

const MoodLog = mongoose.model('MoodLog', moodLogSchema);

module.exports = MoodLog;

const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,  // The message or query from the user
    required: true,
  },
  response: {
    type: String,  // The AI's response to the user
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;

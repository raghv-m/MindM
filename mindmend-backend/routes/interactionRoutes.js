const express = require('express');
const Interaction = require('../models/Interaction');
const router = express.Router();

// Log a new interaction
router.post('/log', async (req, res) => {
  const { userId, message, response } = req.body;

  try {
    // Create a new interaction log
    const interaction = new Interaction({
      user: userId,
      message,
      response,
    });

    await interaction.save();
    res.status(201).json({ message: 'Interaction logged successfully', interaction });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;

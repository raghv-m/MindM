const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,  // Stores the user's date of birth
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  gender: {
    type: String,  // Optional, can be 'male', 'female', 'other', or 'prefer not to say'
  },
  profileCompleted: {
    type: Boolean,  // Indicates if the user has completed their profile
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

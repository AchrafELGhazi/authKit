const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { isEmail } = require('validator');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [8, 'Password must be at least 8 characters'],
    }, 
  },
  { timestamps: true }
);

const User = model('user', userSchema);

module.exports = User;

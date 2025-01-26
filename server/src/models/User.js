const mongoose = require('mongoose')
const { Schema, model } = mongoose();

const userSchema = new Schema({
  email: {
    type: string,
    required: true,
    unique: true,
    lowercase:true
  },
  password: {
    type: string,
    required: true,
    minLength: 8,
  }
});

const User = model('user', userSchema);

module.exports = User;
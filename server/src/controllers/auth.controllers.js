const express = require('express');
const User = require('../models/User');
const handleErrors = require('../utils/handleErrors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;
const MAX_AGE = 3 * 24 * 60 * 60;

const createToken = id => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: MAX_AGE,
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userInfo = await User.findOne({ email });
    if (!userInfo) {
      return res.status(400).json({ error: 'Email not found' });
    }

    const auth = await bcrypt.compare(password, userInfo.password);
    if (!auth) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    const token = createToken(userInfo._id);

    res.cookie('jwt', token, {
      maxAge: MAX_AGE * 1000,
      httpOnly: true,
    });

    res.status(200).json({ user: userInfo._id });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { loginController };

const registerController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userInfo = await User.create({ email, password });

    const token = createToken(userInfo._id);

    res.cookie('jwt', token, {
      maxAge: MAX_AGE * 1000,
      httpOnly: true,
    });

    res.status(201).json({ userInfo: userInfo._id });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const logoutController = (req, res) => {
  const token = res.cookie('jwt', '', { maxAge: 1 });
  res.send('Sign out');
};

const getUserInfoController = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  const { _id, email } = req.user;
  res.status(200).json({ user: { id: _id, email } });
};


module.exports = {
  loginController,
  registerController,
  logoutController,
  getUserInfoController,
};

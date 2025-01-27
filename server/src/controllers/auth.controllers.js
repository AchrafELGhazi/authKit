const express = require('express');
const User = require('../models/User');
const handleErrors = require('../utils/handleErrors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const MAX_AGE = 3 * 24 * 60 * 60;

const createToken = id => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: MAX_AGE,
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send('sign in');
};

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
  res.send('Sign out');
};

module.exports = { loginController, registerController, logoutController };

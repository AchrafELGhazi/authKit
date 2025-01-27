const express = require('express');
const User = require('../models/User');
const handleErrors = require('../utils/handleErrors');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send('sign in');
};

const registerController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userInfo = await User.create({ email, password });
    res.status(201).json(userInfo);
  } catch (error) {
    const errors =  handleErrors(error);
    res.status(400).json({errors});
  }
};

const logoutController = (req, res) => {
  res.send('Sign out');
};

module.exports = { loginController, registerController, logoutController };

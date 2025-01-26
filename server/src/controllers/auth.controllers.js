const express = require('express');

const loginController = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send('sign in');
};

const registerController = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send('sign up');
};

const logoutController = (req, res) => {
  res.send('Sign out');
};

module.exports = { loginController, registerController, logoutController };

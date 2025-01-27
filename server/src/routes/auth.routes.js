const express = require('express');
const {
  loginController,
  logoutController,
  registerController,
} = require('../controllers/auth.controllers');
const { Router } = express;
const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.get('/logout', logoutController);
authRouter.post('/register', registerController);

module.exports = authRouter;

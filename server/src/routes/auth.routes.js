const express = require('express');
const {
  loginController,
  logoutController,
  registerController,
  getUserInfoController,
} = require('../controllers/auth.controllers');
const checkUser = require('../middlewares/checkUser');
const { Router } = express;
const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.get('/logout', logoutController);
authRouter.post('/register', registerController);
authRouter.get('/userInfo', checkUser, getUserInfoController);

module.exports = authRouter;

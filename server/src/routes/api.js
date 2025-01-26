const express = require('express');
const authRouter = require('./auth.routes');
const { Router } = express;
const apiRouter = Router();

apiRouter.use(express.json());// Middleware to parse incoming JSON requests.
// This middleware is used to parse the body of incoming requests with a JSON payload.
// It makes the parsed data available under `req.body`.

apiRouter.use('/auth', authRouter);



module.exports = apiRouter;

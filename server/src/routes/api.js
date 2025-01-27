const express = require('express');
const authRouter = require('./auth.routes');
const { Router } = express;
const apiRouter = Router();
const cors = require('cors');
const cookieParser = require('cookie-parser');

// middlewares
apiRouter.use(express.json()); // Middleware to parse incoming JSON requests.
// This middleware is used to parse the body of incoming requests with a JSON payload.
// It makes the parsed data available under `req.body`.
apiRouter.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
apiRouter.use(cookieParser());

//this is useful to understand and learn about cookies
// apiRouter.get('/setCookies', (req, res) => {
//   // res.setHeader('Set-cookie', 'newUser=true');
//   res.cookie('token', true, {
//     maxAge: 1000 * 60 * 60 * 24,
//     // secure: true,
//     httpOnly: true,
//   });
//   res.send('You got the cookies');
// });

// apiRouter.get('/readCookies', (req, res) => {
//   const cookies = req.cookies;
//   res.json(cookies)
// });

apiRouter.use('/auth', authRouter);

module.exports = apiRouter;

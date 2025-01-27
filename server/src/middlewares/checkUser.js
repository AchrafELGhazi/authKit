const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    req.user = null;

    return res.status(403).json({ auth: false, message: 'No token provided.' });
    next();
  }

  jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      console.log(err.message);
      req.user = null;
      return res
        .status(401)
        .json({ auth: false, message: 'Failed to authenticate token.' });
    }

    try {
      const user = await User.findById(decodedToken.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  });
};

module.exports = checkUser;

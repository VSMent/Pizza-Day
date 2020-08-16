const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../../config');

const authenticate = expressJwt({secret: config.TOKEN});

const generateAccessToken = (req, res, next) => {
  req.token = req.token || {};
  req.token = jwt.sign({
    id: req.user.id,
  }, config.TOKEN, {
    expiresIn: config.TOKEN_LIFE
  });
  next();
};

module.exports = {
  authenticate,
  generateAccessToken
};
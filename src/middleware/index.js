const {errorHandler} = require('./error-handler');
const {authenticate, generateAccessToken} = require('./auth');

module.exports = {
  errorHandler,
  authenticate,
  generateAccessToken
};
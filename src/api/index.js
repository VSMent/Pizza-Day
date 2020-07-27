const express = require('express');
const {errorHandler} = require('../middleware/error-handler');

// models
const {Question} = require('../models/question');

const models = {Question};

// controllers
const questions = require('../controllers/questions');


const initRoutes = () => {
  const app = express();

  // routes
  app.use('/questions/', questions(models));

  app.use(errorHandler);
  return app;
};

module.exports = {
  initRoutes
};
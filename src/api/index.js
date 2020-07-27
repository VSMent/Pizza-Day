const express = require('express');


// models
const {Questions} = require('../models/questions');

const models = {Questions};

// controllers
const questions = require('../controllers/questions');


const initRoutes = () => {
  const app = express();

  // routes
  app.use('/questions/', questions(models));

  return app;
};

module.exports = {
  initRoutes
};
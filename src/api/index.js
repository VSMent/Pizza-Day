const express = require('express');


// controllers
const questions = require('../controllers/questions');


const initRoutes = () => {
  const app = express();

  // routes
  app.use('/questions/', questions());

  return app;
};

module.exports = {
  initRoutes
};
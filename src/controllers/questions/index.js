const {Router} = require('express');

const {list} = require('./list')

module.exports = (models) => {
  const api = Router();
  api.get('/', list(models));
  return api;
};
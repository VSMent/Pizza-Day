const {Router} = require('express');

const {list} = require('./list')
const {create} = require('./create')

module.exports = (models) => {
  const api = Router();
  api.get('/', list(models));
  api.post('/', create(models));
  return api;
};
const {Router} = require('express');

const {list} = require('./list');
const {get} = require('./get');
const {create} = require('./create');

module.exports = (models) => {
  const api = Router();
  api.get('/', list(models));
  api.get('/:_id', get(models));
  api.post('/', create(models));
  return api;
};
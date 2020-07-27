const {Router} = require('express');

module.exports = () => {
  const api = Router();
  return api.get('/', (req, res, next) => {
    console.log("got questions");
  });
};
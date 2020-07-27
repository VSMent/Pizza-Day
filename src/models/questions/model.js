const mongoose = require('mongoose');
const {schema} = require('./schema');
const Question = mongoose.model('question', schema);

module.exports = {
  Question
}

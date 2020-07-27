const mongoose = require('mongoose');
const {schema} = require('./schema');
const Question = mongoose.model('questions', schema);

module.exports = {
  Question
}

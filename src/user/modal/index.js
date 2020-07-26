const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
  },
  profile: {
    fullName: {
      type: String,
      required: [true],
    },
  },
});

const User = mongoose.model('User', schema);

module.exports = {User};
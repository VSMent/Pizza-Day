const mongoose = require('mongoose');
const {MONGODB_URI} = require('../../config');

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log("Connected to DB"))
  .catch(error => console.error(`An error occurred: ${error}`));

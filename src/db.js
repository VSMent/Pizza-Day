const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/ask-apiko-api";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
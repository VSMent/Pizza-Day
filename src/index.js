const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3001/mongoose-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log("Connected"))
  .catch(error => console.error(`An error occurred: ${error}`));


const UserProfileSchema = {
  firstName: String,
  lastName: String,
};

const UserServicesSchema = {
  password: {
    bcrypt: String,
  },
  google: {
    fullName: String,
    accessToken: String,
    refreshToken: String,
  },
};

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 5,
    unique: true
  },
  age: {
    type: Number,
    min: 0,
    max: 100
  },
  dateOfBirth: Date,
  createdAt: {
    type: Date,
    default: new Date()
  },
  tags: [String],
  profile: UserProfileSchema,
  services: {
    type: UserServicesSchema
  },
});

const User = mongoose.model('user', UserSchema);

const userDoc = {
  username: "usEEEr"
};

const runQuery = async () => {
  try {
    const newUser = await User.create(userDoc);

    console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}

runQuery();
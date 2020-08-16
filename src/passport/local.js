const {Unauthorized} = require('rest-api-errors');

const local = User => (username, password, done) => {
  User.findOne({email: username})
    .then(
      user => {
        if (!user) {
          return done(new Unauthorized(401, 'Incorrect username or password'));
        }
        return user.authenticate(password, err => {
          if (err) {
            return done(new Unauthorized(401, 'Incorrect username or password'));
          }
          return done(null, user);
        });
      }
    )
    .catch(done);
};

module.exports = {
  localAuth: local
};
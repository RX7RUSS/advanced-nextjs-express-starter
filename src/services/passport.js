import bcrypt from 'bcrypt';
import passport from 'passport';
import User from '../models/usermodel';
import LocalStrategy from 'passport-local';

const signinStrategy = new LocalStrategy(function (username, password, done) {
  User.findOne({ username: username }).exec()

  .then(user => {
    if (!user) {
      return done(null, false);
    }

    bcrypt.compare(password, user.password, function (err, isMatch) {
      if (err) {
        return done(err, false);
      }

      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    });

  })
  .catch(err => done(err, false));
});

passport.use('signinStrategy', signinStrategy);

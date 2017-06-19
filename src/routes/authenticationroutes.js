// import next from 'next';
// import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User';
import bcrypt from 'bcrypt';
import passport from '../services/passport';
import jwt from 'jwt-simple';


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users');

const router = express.Router();

const signinStrategy = passport.authenticate('signinStrategy', { session: false });

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ userId: user.id, iat: timestamp }, 'abc123');
}

router.post('/api/signin', signinStrategy, (require, response, next) => {
  response.json({ message: 'You have been authenticated!'});
});

router.post('/api/signup', (request, response, next) => {

  const { username, password } = request.body;

  if (!username || !password) {
    return response.status(422)
      .json({error: 'You must provide Username and Password'});
  }

  User.findOne({ username }).exec()
    .then(existingUser => {
      if (existingUser) {
        return response.status(422).json({ error: 'Username is in use'});
      }

      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return next(err);
        }

        const user = new User({ username, password: hashedPassword });

        user.save()
          .then(newUser => response.json({ token: tokenForUser(newUser) }));


      });

    })
    .catch(err => next(err));

});

module.exports = router;

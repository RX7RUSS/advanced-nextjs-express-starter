import next from 'next';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import User from '../models/usermodel';
import bcrypt from 'bcrypt';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users')

const app = express();

app.get('/api/users', function(request, response, next){

  const { username, password } = req.body;

  if(!username || !password) {
    return res.status(422)
      .json({error: 'You must provide Username and Password'});
  }

  User.findOne({ username }).exec()
    .then((existingUser) => {
      if (existingUser) {
        return res.status(422).json({ error: 'Username is in use'})
      }

      bcrypt.hash(password, 10, function(err, hashedPassword) {
        if (err) {
          return next(err);
        }

        const user = new User({ username, password: hashedPassword });

        user.save()
          .then(user => res.json(user))

      });

    })
    .catch(err => next(err));

});

module.exports = router;

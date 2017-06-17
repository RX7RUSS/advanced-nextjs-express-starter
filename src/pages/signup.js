import next from 'next';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/advanced-nextjs-express-starter')

const app = express();

app.get('/api/users', function(request, response, next){

  const { username, password } = req.body;

  if(!username || !password) {
    return res.status(422)
      .json({error: 'name or password already in use'});
  }

  User.FindOne()


}

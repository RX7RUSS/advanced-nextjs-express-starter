import next from 'next';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import User from '../models/usermodel';
import bcrypt from 'bcrypt';

mongoose.connect('mongodb://localhost/users')

const app = express();

app.get('/api/users', function(request, response, next){

  const { username, password } = req.body;

  if(!username || !password) {
    return res.status(422)
      .json({error: 'name or password already in use'});
  }

  User.findOne({}).exec;


}

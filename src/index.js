import next from 'next';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser';


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/advanced-nextjs-express-starter');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected');
});

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3001;

nextApp.prepare().then(() => {
  const app = express();

  // Define all your backend handlers here...

  app.get('/api/blogpost', (request, response) => {
    return response.json([
      {
        title: 'First Blog Post'
      }
    ]);
  });

  app.post('/api/blogpost', (request, response) => {
    const newBlogPost = {
      ...request.body
    };
    // eslint-disable-next-line
    blogpost.push(newBlogPost);
    return response.json(newBlogPost);
  });

  // Handle everything that is not covered in above routes with next.js
  app.get('*', (request, response) => {
    return handle(request, response);
  });


  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port ' + PORT);
  });
});

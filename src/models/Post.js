import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: {
    type: String,
    maxlength: [ 100, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  body: {
    type: String,
    maxlength: [ 300, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  added: {
    type: Date,
    default: Date.now,
    required: true
  },
});

export default mongoose.model('Post', postSchema);

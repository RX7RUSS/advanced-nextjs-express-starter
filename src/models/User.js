import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    maxlength: [ 32, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  password: {
    type: String,
    maxlength: [ 32, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  email: {
    type: String,
    maxlength: [ 64, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
});

export default mongoose.model('User', userSchema);

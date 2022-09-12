import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name should not be more than 50 characters'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
    maxlength: [30, 'Username should not be more than 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    maxlength: [1000, 'Email should not be more than 100 characters'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email',
    ],
  },
  slug: String,
  phone: {
    type: Number,
    required: [true, 'Phone is required'],
    trim: true,
    unique: true,
    minlength: [10, 'Phone number should have 10 digits'],
    maxlength: [10, 'Phone number should have 10 digits'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model('User', UserSchema);

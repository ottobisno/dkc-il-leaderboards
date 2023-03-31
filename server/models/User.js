import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

// Schema to create User model
const userSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  ILs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'IL'
    }
  ],
  avatar: {
    type: String,
    required: false
  },
  join_date: {
    type: Date,
    default: Date.now,
  }
})
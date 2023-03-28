import { Schema, model } from 'mongoose';

const ILSchema = new Schema({
  time: {
    type: Number,
    required: true
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  stage: [
    {
      type: Schema.Types.ObjectId,
      ref: 'stage'
    }
  ],
  variant: [
    {
      type: Schema.Types.ObjectId,
      ref: 'variant'
    }
  ]
})
import { Schema, model } from 'mongoose';

// Schema to create IL model, giving access to all respective info from other models
const ILSchema = new Schema({
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  time: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  video: {
    type: String,
    required: false
  },
  stage: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Stage'
    }
  ],
  // game: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Game'
  //   }
  // ],
  // category: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Category'
  //   }
  // ],
  // world: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'World'
  //   }
  // ],
  // stage: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Stage'
  //   }
  // ]
});

const IL = model('IL', ILSchema);

module.exports = IL;

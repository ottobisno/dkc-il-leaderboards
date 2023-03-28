import { Schema, model } from 'mongoose';

const worldSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  stages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'stage'
    }
  ]
});

const World = model('World', worldSchema);

module.exports = World;

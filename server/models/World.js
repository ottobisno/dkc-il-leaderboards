import { Schema, model } from 'mongoose';

// Schema to create World model
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
      ref: 'Stage'
    }
  ]
});

const World = model('World', worldSchema);

module.exports = World;

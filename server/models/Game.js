import { Schema, model } from 'mongoose';

// Schema to create Game model
const gameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ]
});

const Game = model('Game', gameSchema);

module.exports = Game;

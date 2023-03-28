import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  worlds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'world'
    }
  ]
});

const Category = model('Category', categorySchema);

module.exports = Category;

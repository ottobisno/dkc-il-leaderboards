import { Schema, model } from 'mongoose';

// Schema to create Category model
const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  worlds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'World'
    }
  ]
});

const Category = model('Category', categorySchema);

module.exports = Category;

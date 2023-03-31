import { Schema, model } from 'mongoose';

// Schema to create Variant model for each stage
const variantSchema = new Schema({
  name: {
    type: String,
    default: 'Standard'
  },
  ILs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'IL'
    }
  ]
});

const Variant = model('Variant', variantSchema);

module.exports = Variant;

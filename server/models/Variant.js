import { Schema, model } from 'mongoose';

const variantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ILs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'il'
    }
  ]
});

const Variant = model('Varient', variantSchema);

module.exports = Variant;

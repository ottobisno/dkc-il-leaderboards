import { Schema, model } from 'mongoose';

const stageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  variants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'variant'
    }
  ]
});

const Stage = model('Stage', stageSchema);

module.exports = Stage;

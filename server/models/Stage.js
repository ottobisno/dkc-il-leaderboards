import { Schema, model } from 'mongoose';
import Variant from './Variant';

// Schema to create Stage model
const stageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  variants: [Variant.schema]
});

const Stage = model('Stage', stageSchema);

module.exports = Stage;

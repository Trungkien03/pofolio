import { Schema, models, model } from 'mongoose';

const ReferenceSchema = new Schema({
  name: String,
  position: String,
  email: String,
  phone: String,
});

export default models.Reference || model('Reference', ReferenceSchema);

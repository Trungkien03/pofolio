import { Schema, model, models } from "mongoose";

const CertificationSchema = new Schema({
  title: String,
  organization: String,
  date: String,
  description: String,
  link: String,
  icon: String,
});

export default models.Certification ||
  model("Certification", CertificationSchema);

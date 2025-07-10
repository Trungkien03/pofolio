import { DB_COLLECTION_NAME } from "@/config/db-collection-name";
import { Schema, model, models } from "mongoose";

const EducationSchema = new Schema({
  school: String,
  href: String,
  degree: String,
  logoUrl: String,
  start: String,
  end: String,
  description: String,
});

export default models.Education ||
  model(DB_COLLECTION_NAME.EDUCATION, EducationSchema);

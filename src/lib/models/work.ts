import { DB_COLLECTION_NAME } from "@/config/db-collection-name";
import { Schema, model, models } from "mongoose";

const WorkSchema = new Schema({
  company: String,
  href: String,
  location: String,
  badges: [String],
  title: String,
  logoUrl: String,
  start: String,
  end: String,
  description: String,
});

export default models.Work || model(DB_COLLECTION_NAME.WORK, WorkSchema);

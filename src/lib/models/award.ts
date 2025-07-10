import { DB_COLLECTION_NAME } from "@/config/db-collection-name";
import { Schema, model, models } from "mongoose";

const AwardSchema = new Schema({
  title: String,
  date: String,
  icon: String,
  description: String,
  location: String,
});

export default models.Award || model(DB_COLLECTION_NAME.AWARD, AwardSchema);

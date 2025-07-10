import { DB_COLLECTION_NAME } from "@/config/db-collection-name";
import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema({
  name: String,
  icon: String,
});

export default models.Skill || model(DB_COLLECTION_NAME.SKILL, SkillSchema);

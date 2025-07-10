import { DB_COLLECTION_NAME } from "@/config/db-collection-name";
import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
  title: String,
  href: String,
  dates: String,
  active: Boolean,
  description: String,
  technologies: [String],
  links: [
    {
      type: { type: String },
      href: String,
      icon: String,
    },
  ],
  image: String,
  video: String,
});

export default models.Project ||
  model(DB_COLLECTION_NAME.PROJECT, ProjectSchema);

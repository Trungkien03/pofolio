import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: String,
  content: String,
});

export default models.Post || model("Post", PostSchema);

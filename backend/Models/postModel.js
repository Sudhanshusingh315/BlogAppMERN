const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String, required: true },
    postPic: String,

  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;

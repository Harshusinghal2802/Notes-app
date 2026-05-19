import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: String,

    content: String,

    category: {
      type: String,
      default: "Personal",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
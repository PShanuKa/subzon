import mongoose from "mongoose";

const languageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sinhalaTitle: {
      type: String,
      // required: true,
    },
 
  },
  {
    timestamps: true,
  }
);

const Language = mongoose.model("Language", languageSchema);

export default Language;

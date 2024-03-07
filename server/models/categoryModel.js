import mongoose from "mongoose";



const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sinhalaTitle: {
      type: String,
      // required: true,
    },
    slug: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
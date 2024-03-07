import expressAsyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// Create postCategory
export const postCategory = expressAsyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      status: true,
      message: "Category Create successfully",
      Category: newCategory,
    });
  } catch (error) {
    // Handle errors properly
    console.error("Error creating Category:", error);
    res.status(500).json({
      status: false,
      message: "Failed to create Category",
      error: error.message, // Send the error message to the client
    });
  }
});

// Update Category
export const updateCategory = expressAsyncHandler(async (req, res) => {
  try {
    const { slug } = req.params;
    

    // Find the category by slug and update it
    const updatedCategory = await Category.findOneAndUpdate({ slug }, req.body, { new: true });

    // Check if the category exists
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Respond with the updated category
    res.status(200).json({
      status: true,
      message: 'Category updated successfully',
      Category: updatedCategory
    });
  } catch (error) {
    // Handle errors properly
    console.error("Error updating Category:", error);
    res.status(500).json({
      status: false,
      message: "Failed to update Category",
      error: error.message, // Send the error message to the client
    });
  }
});

// Get all Category
export const getAllCategory = expressAsyncHandler(async (req, res) => {
  try {
    // Find all categories
    const categories = await Category.find();

    // Respond with the list of categories
    res.status(200).json({
      status: true,
      message: "Categories fetched successfully",
      categories
    });
  } catch (error) {
    // Handle errors properly
    console.error("Error fetching categories:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch categories",
      error: error.message, // Send the error message to the client
    });
  }
});

// Get a Category by slug
export const getACategory = expressAsyncHandler(async (req, res) => {
  try {
    const { slug } = req.params;

    // Find the category by slug
    const category = await Category.findOne({ slug });

    // Check if the category exists
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Respond with the found category
    res.status(200).json({
      status: true,
      message: 'Category fetched successfully',
      category
    });
  } catch (error) {
    // Handle errors properly
    console.error("Error fetching category:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch category",
      error: error.message, // Send the error message to the client
    });
  }
});

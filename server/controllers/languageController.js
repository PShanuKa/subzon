import expressAsyncHandler from "express-async-handler";
import Language from "../models/languageModel.js";


// Create postlanguage
export const postLanguage = expressAsyncHandler(async (req, res) => {
  try {
    const newlanguage = await Language.create(req.body);

    res.status(201).json({
      status: true,
      message: "language Create successfully",
      language: newlanguage,
    });
  } catch (error) {
    // Handle errors properly
    console.error("Error creating language:", error);
    res.status(500).json({
      status: false,
      message: "Failed to create language",
      error: error.message, // Send the error message to the client
    });
  }
});

// Update language
export const updateLanguage = expressAsyncHandler(async (req, res) => {
  try {
    const { slug } = req.params;
    

    // Find the language by slug and update it
    const updatedLanguage = await Language.findOneAndUpdate({ slug }, req.body, { new: true });

    // Check if the language exists
    if (!updatedLanguage) {
      return res.status(404).json({ message: 'language not found' });
    }

    // Respond with the updated language
    res.status(200).json({
      status: true,
      message: 'language updated successfully',
      language: updatedLanguage
    });
  } catch (error) {
    // Handle errors properly
    console.error("Error updating language:", error);
    res.status(500).json({
      status: false,
      message: "Failed to update language",
      error: error.message, // Send the error message to the client
    });
  }
});

// Get all language
export const getAllLanguage = expressAsyncHandler(async (req, res) => {
  try {
    // Find all categories
    const language = await Language.find();

    // Respond with the list of categories
    res.status(200).json({
      status: true,
      message: "Language fetched successfully",
      language
    });
  } catch (error) {
    // Handle errors properly
    console.error("Error fetching Language:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch Language",
      error: error.message, // Send the error message to the client
    });
  }
});

// Get a language by slug
export const getALanguage = expressAsyncHandler(async (req, res) => {
  try {
    const { slug } = req.params;

    // Find the language by slug
    const language = await Language.findOne({ slug });

    // Check if the language exists
    if (!language) {
      return res.status(404).json({ message: 'language not found' });
    }

    // Respond with the found language
    res.status(200).json({
      status: true,
      message: 'language fetched successfully',
      language
    });
  } catch (error) {
    // Handle errors properly
    console.error("Error fetching language:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch language",
      error: error.message, // Send the error message to the client
    });
  }
});

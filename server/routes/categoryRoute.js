import express from "express";
import { postCategory, updateCategory, getAllCategory, getACategory } from "../controllers/categoryController.js";

export const categoryRouter = express.Router();

// Create a category
categoryRouter.post("/create", postCategory);

// Update a category
categoryRouter.put("/update/:slug", updateCategory);

// Get all categories
categoryRouter.get("/all", getAllCategory);

// Get a category by slug
categoryRouter.get("/:slug", getACategory);


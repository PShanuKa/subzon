import express from "express";
import { getALanguage, getAllLanguage, postLanguage, updateLanguage } from "../controllers/languageController.js";


export const languageRouter = express.Router();

// Create a language
languageRouter.post("/create", postLanguage);

// Update a language
languageRouter.put("/update/:slug", updateLanguage);

// Get all language
languageRouter.get("/all", getAllLanguage);

// Get a language by slug
languageRouter.get("/:slug", getALanguage);

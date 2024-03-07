import express from "express";
import { postComment, updateComment } from "../controllers/commentController.js";


export const commentRouter = express.Router();

// Create a comment
commentRouter.post("/:blogId", postComment);

// Update a comment
commentRouter.put("/update/:slug", updateComment);

// delete a comment
// commentRouter.get("/all", getAllCategory);


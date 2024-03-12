import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { postBlog, updateBlog, getABlog, getAllBlog, unlikeBlog, likeBlog } from "../controllers/blogController.js";

export const blogRouter = express.Router();


blogRouter.post("/create", authMiddleware , postBlog);
blogRouter.put("/update/:slug_blog", authMiddleware, updateBlog)
blogRouter.get("/all", getAllBlog);
blogRouter.get("/:slug", getABlog);

blogRouter.put("/like/:slug", authMiddleware, likeBlog)
blogRouter.put("/unlike/:slug", authMiddleware, unlikeBlog)



import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { postBlog, updateBlog, getABlog, getAllBlog } from "../controllers/blogController.js";

export const blogRouter = express.Router();


blogRouter.post("/create", authMiddleware , postBlog);
blogRouter.put("/update/:slug_blog", authMiddleware, updateBlog)
blogRouter.get("/all", getAllBlog);
blogRouter.get("/:slug", getABlog);



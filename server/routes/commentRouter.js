import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { dislikeComment, likeComment, postComment, removeDislikeComment, removeLikeComment, updateComment } from "../controllers/commentController.js";


export const commentRouter = express.Router();


// Update a comment
commentRouter.put("/update/:slug",authMiddleware , updateComment);

// Like & removelike a cpmment
commentRouter.post("/like/:commentId",authMiddleware, likeComment)
commentRouter.post("/removelike/:commentId",authMiddleware, removeLikeComment)

// disLike & removedislike a cpmment
commentRouter.post("/dislike/:commentId",authMiddleware, dislikeComment)
commentRouter.post("/removedislike/:commentId",authMiddleware, removeDislikeComment)


// Create a comment
commentRouter.post("/:blogId",authMiddleware, postComment);

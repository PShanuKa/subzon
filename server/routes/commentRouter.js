import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { deleteComment, dislikeComment, likeComment, postComment, removeDislikeComment, removeLikeComment, updateComment, createReplyComment, deleteReplyComment } from "../controllers/commentController.js";


export const commentRouter = express.Router();


// Create A Reply Comment
commentRouter.post("/reply/:commentId",authMiddleware, createReplyComment);

commentRouter.delete("/reply/:replyCommentId" , authMiddleware, deleteReplyComment);




// Update a comment
commentRouter.put("/update/:slug",authMiddleware , updateComment);

// Like & removelike a cpmment
commentRouter.post("/like/:commentId",authMiddleware, likeComment)
commentRouter.post("/removelike/:commentId",authMiddleware, removeLikeComment)

// disLike & removedislike a comment
commentRouter.post("/dislike/:commentId",authMiddleware, dislikeComment)
commentRouter.post("/removedislike/:commentId",authMiddleware, removeDislikeComment)

// Create a comment
commentRouter.post("/:blogId",authMiddleware, postComment);


// Delete a comment
commentRouter.delete("/:commentId" , authMiddleware, deleteComment);






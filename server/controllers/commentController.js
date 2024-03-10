import expressAsyncHandler from "express-async-handler";
import Comment from "../models/commentModel.js";
import Blog from "../models/blogModel.js";


export const postComment = expressAsyncHandler(async (req, res) => {

  const userId = req.user.id
  const { blogId } = req.params
  const { comment } = req.body; 

    const blog = await Blog.findById(blogId);

    if (blog) {
      try {
        const newComment = new Comment({
          comment,
          author: userId, 
        });

        const createdComment = await newComment.save();

        blog.comments.push(createdComment);

        await blog.save();
        res.status(201).json(createdComment); 
      } catch(error) {
        res.status(500).json({ message: "Failed to post comment", error: error.message });
      }
      
    }else{
      return res.status(404).json({ message: "Blog not found" });
    }
});


export const updateComment = expressAsyncHandler(async (req, res) => {
  const {id: userId} = req.user;
  const { id:commentId } = req.params; 
  const { comment } = req.body; 

  try {
    const verifyUser = await Comment.findById(commentId)

    if(userId===verifyUser.author){
      const updatedComment = await Comment.findByIdAndUpdate(
        commentId,
        { comment },
        { new: true } 
      );
  
      if (!updatedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      
  
      res.status(200).json(updatedComment); 
    }else{
      return res.status(404).json({ message: "Not your Comment" });

    }
  } catch (error) {
    
    res.status(500).json({ message: "Failed to update comment", error: error.message });
  }
});


export const deleteComment = expressAsyncHandler(async (req, res) => {
  const { commentId } = req.params; 
  try {

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const blog = await Blog.findOneAndUpdate(
      { comments: commentId },
      { $pull: { comments: commentId } },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete comment", error: error.message });
  }
});


export const likeComment = expressAsyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { id: userId } = req.user;

  try {
    // Find the comment by ID
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the user has already liked the comment
    if (comment.like.includes(userId)) {
      return res.status(400).json({ message: 'You have already liked this comment' });
    }

    // Check if the user has previously disliked the comment
    const dislikeIndex = comment.dislike.indexOf(userId);
    if (dislikeIndex !== -1) {
      // If the user has disliked the comment, remove their dislike
      comment.dislike.splice(dislikeIndex, 1);
    }

    // Add the user's ID to the like array
    comment.like.push(userId);
    
    // Save the updated comment
    await comment.save();

    return res.status(200).json({ message: 'Comment liked successfully', comment });
  } catch (error) {
    console.error('Error liking comment:', error);
    return res.status(500).json({ message: 'Failed to like comment', error: error.message });
  }
});

export const removeLikeComment = expressAsyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { id: userId } = req.user;

  try {
    // Find the comment by ID
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the user has liked the comment
    const likeIndex = comment.like.indexOf(userId);
    if (likeIndex === -1) {
      return res.status(400).json({ message: 'You have not liked this comment' });
    }

    // Remove the user's ID from the like array
    comment.like.splice(likeIndex, 1);
    
    // Save the updated comment
    await comment.save();

    return res.status(200).json({ message: 'Like removed successfully', comment });
  } catch (error) {
    console.error('Error removing like from comment:', error);
    return res.status(500).json({ message: 'Failed to remove like from comment', error: error.message });
  }
});

export const dislikeComment = expressAsyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { id: userId } = req.user;

  try {
    // Find the comment by ID
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the user has already disliked the comment
    if (comment.dislike.includes(userId)) {
      return res.status(400).json({ message: 'You have already disliked this comment' });
    }

    // Check if the user has previously liked the comment
    const likeIndex = comment.like.indexOf(userId);
    if (likeIndex !== -1) {
      // If the user has liked the comment, remove their like
      comment.like.splice(likeIndex, 1);
    }

    // Add the user's ID to the dislike array
    comment.dislike.push(userId);
    
    // Save the updated comment
    await comment.save();

    return res.status(200).json({ message: 'Comment disliked successfully', comment });
  } catch (error) {
    console.error('Error disliking comment:', error);
    return res.status(500).json({ message: 'Failed to dislike comment', error: error.message });
  }
});


export const removeDislikeComment = expressAsyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { id: userId } = req.user;

  try {
    // Find the comment by ID
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the user has disliked the comment
    const dislikeIndex = comment.dislike.indexOf(userId);
    if (dislikeIndex === -1) {
      return res.status(400).json({ message: 'You have not disliked this comment' });
    }

    // Remove the user's ID from the dislike array
    comment.dislike.splice(dislikeIndex, 1);
    
    // Save the updated comment
    await comment.save();

    return res.status(200).json({ message: 'Dislike removed successfully', comment });
  } catch (error) {
    console.error('Error removing dislike from comment:', error);
    return res.status(500).json({ message: 'Failed to remove dislike from comment', error: error.message });
  }
});
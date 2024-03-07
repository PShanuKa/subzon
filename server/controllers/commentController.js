import expressAsyncHandler from "express-async-handler";
import Comment from "../models/commentModel.js";
import Blog from "../models/blogModel.js";


export const postComment = expressAsyncHandler(async (req, res) => {
  // const { id: userId } = req.user;
  const userId = "65dca578063115b86258b81e"
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
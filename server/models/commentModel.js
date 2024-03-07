import mongoose from "mongoose";

const replyCommentSchema = new mongoose.Schema({
    reply: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    like: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislike: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    reply: {
        type: [replyCommentSchema]
    }
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

import expressAsyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

// Create Blog
export const postBlog = expressAsyncHandler(async (req, res) => {
  try {
    const userId = req.user.id ;
    req.body.creator = userId
    const { isPublic, ...blog } = req.body;
    
    const newBlog = await Blog.create(blog);

    res.status(201).json({
      status: true,
      message: "Blog Create successfully",
      Blog: newBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({
      status: false,
      message: "Failed to create blog",
      error: error.message, 
    });
  }
});

//Update blog
export const updateBlog = expressAsyncHandler(async (req, res) => {
  try {
    const { slug_blog } = req.params;

    const { slug, isPublic, ...updatedBlogData } = req.body;

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: slug_blog },
      updatedBlogData,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ status: false, message: "Blog not found" });
    }
    res.status(200).json({
      status: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({
      status: false,
      message: "Failed to update blog",
      error: error.message, 
    });
  }
});

// get all blog
export const getAllBlog = expressAsyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("category", "title")
      .populate("creator","firstname")
      .populate("language", "title")
      .populate({
        path: "comments",
        select: "comment author",
        populate: {
          path: "author",
          select: "firstname user_image",
        },
      });
    if (!blogs) {
      res.status(200).json({
        status: false,
        message: "No blogs foundd",
      });
    }

    res.status(200).json({
      status: true,
      message: "Blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch blogs",
      error: error.message,
    });
  }
});

// get a blog
export const getABlog = expressAsyncHandler(async (req, res) => {
  try {
    const { slug } = req.params; 

    
    const blog = await Blog.findOne({ slug }).populate("category", "title")
    .populate("creator","firstname lastname")
    .populate("language", "title")
    .populate({
      path: "comments",
      select: "comment like dislike author",
      populate: {
        path: "author",
        select: "firstname lastname user_image",
      },
    });;

   
    if (!blog) {
      return res.status(404).json({ status: false, message: "Blog not found" });
    }

    
    res.status(200).json({
      status: true,
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch blog",
      error: error.message, 
    });
  }
});

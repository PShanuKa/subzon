import { BLOG_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const blogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: () => `${BLOG_URL}/all`,
            method: "GET"
        }),
        getABlog: builder.query({
            query: (slug) => ({
                url: `${BLOG_URL}/${slug}`,
                method: "GET",
            })
        }),
        postLikeComment: builder.mutation({
            query: (id) => ({
                url: `${BLOG_URL}/comment/like/${id}`,
                method: "POST",
            })
        }),
        postDisLikeComment: builder.mutation({
            query: (id) => ({
                url: `${BLOG_URL}/comment/dislike/${id}`,
                method: "POST",
            })
        }),
    })
})


export const {useGetAllBlogsQuery, useGetABlogQuery, usePostLikeCommentMutation,usePostDisLikeCommentMutation} =blogApiSlice
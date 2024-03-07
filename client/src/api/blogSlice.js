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
    })
})


export const {useGetAllBlogsQuery, useGetABlogQuery} =blogApiSlice
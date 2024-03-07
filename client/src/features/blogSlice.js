import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: [],
  loading: false,
  error : null,
}

export const getAllBlog = createAsyncThunk("AllBlog", async () => {
  try {
    const response = await fetch("http://localhost:3000/api/blog/all");
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const result = await response.json();
    return result.blogs;
  } catch (error) {
    return error.message; 
  }
})

export const allBlogSlice = createSlice({
  name: 'all',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.all   = action.payload;
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default allBlogSlice.reducer;

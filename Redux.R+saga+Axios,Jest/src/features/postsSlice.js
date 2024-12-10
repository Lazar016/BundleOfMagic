import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.status = 'succeeded';
    },
    fetchPostsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});


export const { fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;


export default postsSlice.reducer;


export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

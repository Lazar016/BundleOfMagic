import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Definisanje asinhrone funkcije za povlačenje podataka
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

// Inicijalno stanje
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// Kreiranje Slice-a
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = []; // Brisanje liste postova
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload; // Smeštanje povučenih podataka
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Postavljanje greške
      });
  },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, clearPosts } from '../features/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  return (
    <div>
      <h1>Posts List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <button onClick={() => dispatch(fetchPosts())}>Load Posts</button>
      <button onClick={() => dispatch(clearPosts())}>Clear Posts</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
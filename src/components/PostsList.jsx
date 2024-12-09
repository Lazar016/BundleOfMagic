import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

 
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
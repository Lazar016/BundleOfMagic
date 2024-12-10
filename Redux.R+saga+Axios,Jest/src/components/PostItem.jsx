
import React from 'react';

const PostItem = ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);

export default PostItem;

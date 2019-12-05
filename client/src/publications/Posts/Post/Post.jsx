import React from 'react';
import './Post.css';

function Post({ imageUrl, imageAlt, children }) {
  return <div className="Post">
    <p className="description">{children}</p>
    <p>Да се отварят правилно Detailed View-тата</p>
  </div>;
};

export default Post;
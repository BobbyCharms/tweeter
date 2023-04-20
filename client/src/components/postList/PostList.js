import React from 'react';
import Post from '../post/Post';
import styles from './PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

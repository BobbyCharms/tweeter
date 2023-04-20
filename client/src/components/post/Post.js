import React from 'react';
import styles from './Post.css';

const Post = ({ post }) => {
  const { username, text, createdAt } = post;

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.profilePicture}></div>
        <div className={styles.postInfo}>
          <span className={styles.username}>{username}</span>
          <span className={styles.createdAt}>{createdAt}</span>
        </div>
      </div>
      <div className={styles.postMessage}>{text}</div>
      {/* Add other post-related features like thumbs up/down, comments, etc. */}
    </div>
  );
};

export default Post;

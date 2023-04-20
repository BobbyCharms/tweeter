import React, { useState } from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const { username, text, createdAt, thumbsUp, thumbsDown, comments } = post;

  const [currentThumbsUp, setCurrentThumbsUp] = useState(thumbsUp);
  const [currentThumbsDown, setCurrentThumbsDown] = useState(thumbsDown);

  const handleThumbsUp = () => {
    setCurrentThumbsUp(currentThumbsUp + 1);
    // Update thumbs up count on server
  };

  const handleThumbsDown = () => {
    setCurrentThumbsDown(currentThumbsDown + 1);
    // Update thumbs down count on server
  };

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
      <div className={styles.postActions}>
        <button className={styles.actionButton} onClick={handleThumbsUp}>
          Thumbs Up ({currentThumbsUp})
        </button>
        <button className={styles.actionButton} onClick={handleThumbsDown}>
          Thumbs Down ({currentThumbsDown})
        </button>
        <div className={styles.comments}>{comments.length} comments</div>
      </div>
    </div>
  );
};

export default Post;

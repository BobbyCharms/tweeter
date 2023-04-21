import React from 'react';
import Comment from './comment';

function ManyComments({ comments }) {
  return (
    <div>
      {comments.map((item, index) => (
        <Comment
          key={index}
          username={item.username}
          comment={item.commentText}
          createdOn={item.createdAt}
          userId={item.userId}
          id={item._id}
        />
      ))}
    </div>
  );
}

export default ManyComments;

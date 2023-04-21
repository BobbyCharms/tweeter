import React from 'react';
import Comment from './comment';

function ManyComments({ comments }) {
  return (
    <div>
      {comments.map((item, index) => (
        <Comment
          key={index}
          title={item.title}
          username={item.username}
          comment={item.comment}
          createdOn={item.createdOn}
        />
      ))}
    </div>
  );
}

export default ManyComments;

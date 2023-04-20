import React from 'react';
import './ProfileComments.css';
import CommentItem from '../comments/CommentItem';

const ProfileComments = ({ comments, user }) => {
  return (
    <div className="profile-comments">
      <h2 className="section-title">Your Comments</h2>
      {comments.length === 0 ? (
        <p className="no-comments">You haven't commented on any posts yet.</p>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <CommentItem comment={comment} user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileComments;

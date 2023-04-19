import React from 'react';
import './ProfilePosts.css';
// update if path changes
import PostItem from '../posts/PostItem';

const ProfilePosts = ({ posts, user }) => {
  return (
    <div className="profile-posts">
      <h2 className="section-title">Your Posts</h2>
      {posts.length === 0 ? (
        <p className="no-posts">You haven't posted anything yet.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <PostItem post={post} user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfilePosts;

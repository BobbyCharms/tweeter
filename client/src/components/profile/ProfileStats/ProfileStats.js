import React from 'react';
import './ProfileStats.css';

const ProfileStats = ({ user }) => {
  const { posts, followers, following, thumbsUpCount, thumbsDownCount } = user;

  return (
    <div className="profile-stats">
      <div className="stat-item">
        <span className="stat-count">{posts.length}</span>
        <span className="stat-label">Posts</span>
      </div>
      {/* Just adding the following, followers for now, needs to be removed if not viable */}
      <div className="stat-item">
        <span className="stat-count">{followers.length}</span>
        <span className="stat-label">Followers</span>
      </div>
      <div className="stat-item">
        <span className="stat-count">{following.length}</span>
        <span className="stat-label">Following</span>
      </div>
      <div className="stat-item">
        <span className="stat-count">{thumbsUpCount}</span>
        <span className="stat-label">Thumbs Up</span>
      </div>
      <div className="stat-item">
        <span className="stat-count">{thumbsDownCount}</span>
        <span className="stat-label">Thumbs Down</span>
      </div>
    </div>
  );
};

export default ProfileStats;

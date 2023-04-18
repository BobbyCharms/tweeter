import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ user }) => {
  const { profilePicture, username, bio, tweeterYellow } = user;

  return (
    <div className="profile-header">
      <img
        src={profilePicture || 'default_profile_picture.png'}
        alt={username}
        className="profile-picture"
      />
      <div className="profile-details">
        <h1 className="username">{username}</h1>
        {tweeterYellow && (
          <span className="tweeter-yellow-badge">Tweeter Yellow</span>
        )}
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;

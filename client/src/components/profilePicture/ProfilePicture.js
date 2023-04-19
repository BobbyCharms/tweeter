import React from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ imageUrl, username }) => {
  return (
    <div className="profile-picture">
      <img src={imageUrl} alt={`${username}'s profile picture`} />
    </div>
  );
};

export default ProfilePicture;

import React from 'react';
import './ProfileFollowing.css';
import UserItem from '../users/UserItem';

const ProfileFollowing = ({ following }) => {
  return (
    <div className="profile-following">
      <h2 className="section-title">Following</h2>
      {following.length === 0 ? (
        <p className="no-following">You are not following anyone yet.</p>
      ) : (
        <ul>
          {following.map((followedUser) => (
            <li key={followedUser.id}>
              <UserItem user={followedUser} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileFollowing;

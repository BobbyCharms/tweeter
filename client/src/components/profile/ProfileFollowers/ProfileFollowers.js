import React from 'react';
import './ProfileFollowers.css';
import UserItem from '../users/UserItem';

const ProfileFollowers = ({ followers }) => {
  return (
    <div className="profile-followers">
      <h2 className="section-title">Followers</h2>
      {followers.length === 0 ? (
        <p className="no-followers">You don't have any followers yet.</p>
      ) : (
        <ul>
          {followers.map((follower) => (
            <li key={follower.id}>
              <UserItem user={follower} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileFollowers;

import React, { useState } from 'react';
import './ProfileEditor.css';

const ProfileEditor = ({ user, onSave }) => {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...user, username, bio });
  };

  return (
    <div className="profile-editor">
      <h2 className="section-title">Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileEditor;

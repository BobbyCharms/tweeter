import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileStats from './ProfileStats/ProfileStats';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import ProfileComments from './ProfileComments/ProfileComments';
import ProfileEditor from './ProfileEditor/ProfileEditor';
import ProfileFollowers from './ProfileFollowers/ProfileFollowers';
import ProfileFollowing from './ProfileFollowing/ProfileFollowing';

const Profile = ({ user, posts, comments }) => {
  return (
    <div className="profile">
      <ProfileHeader user={user} />
      <ProfileStats user={user} />
      <ProfilePosts posts={posts} />
      <ProfileComments comments={comments} />
      <ProfileEditor user={user} />
      <ProfileFollowers user={user} />
      <ProfileFollowing user={user} />
    </div>
  );
};

export default Profile;

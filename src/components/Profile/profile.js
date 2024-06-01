import React from 'react';
import './profile.css'; // Import the CSS file for styling

const Profile = ({ name, avatar, bio, email }) => {
  return (
    <div className="profile">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <h1 className="profile-name">{name}</h1>
      <p className="profile-bio">{bio}</p>
      <p className="profile-email">Contact: <a href={`mailto:${email}`}>{email}</a></p>
    </div>
  );
};

export default Profile;



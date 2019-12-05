import React from 'react';
import Posts from '../publications/Posts/Posts';
import './Profile.css';

 const Profile = () => {
  return <div className="Profile">
    <img src="" alt="profle" />
    <div className="personal-info">
      <p>
        <span>User-ът да вижда само неговите постове</span>
        <div>myemail@abv.bg</div>
      </p>
      <p>
        <span>Posts:</span>
        100000
      </p>
    </div>
    <Posts limit={3} />
  </div>;
}

export default Profile
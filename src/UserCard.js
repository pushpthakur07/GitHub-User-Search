import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className='user_detail'>
      {user && (
        <div className='inr_user_detail'>
          <img src={user.avatar_url} alt="User Avatar" />
          <div className='rgt_sec'>
          <h2><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a></h2>
          <p>{user.bio}</p>
          <p>Followers: {user.followers}</p>
          {/* Add more user details here */}
           </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
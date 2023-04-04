import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const UserLogo = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserLogo;

import React from 'react';
import { useSelector } from 'react-redux';

import { selectAuthUserAvatarURL } from 'redux/auth/authSelectors';

import { Avatar } from './UserAvatar.styled';

const UserAvatar = () => {
  const avatarURL = useSelector(selectAuthUserAvatarURL);
  return <Avatar src={avatarURL} alt="User's avatar" />;
};

export default UserAvatar;

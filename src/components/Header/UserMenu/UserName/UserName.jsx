import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUserName } from 'redux/auth/authSelectors';
import { StyledName } from './UserName.styled';

const UserName = () => {
  const userName = useSelector(selectAuthUserName);
  return <StyledName>{userName}</StyledName>;
};

export default UserName;

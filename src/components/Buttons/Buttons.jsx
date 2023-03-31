import React from 'react';
import {
  StyledSearchBlackBtn,
  StyledSearchGreenBtn,
  StyledSignInBtn,
  StyledSubscribeGreenBtn,
  StyledLogOutBtn,
  StyledCancelBtn,
} from './Buttons.styled';

export const SearchBlackBtn = ({ children }) => {
  return <StyledSearchBlackBtn type="submit">{children}</StyledSearchBlackBtn>;
};
export const SearchGreenBtn = ({ children }) => {
  return <StyledSearchGreenBtn>{children}</StyledSearchGreenBtn>;
};
export const SignInBtn = ({ children }) => {
  return <StyledSignInBtn>{children}</StyledSignInBtn>;
};
export const SubscribeGreenBtn = ({ children }) => {
  return <StyledSubscribeGreenBtn>{children}</StyledSubscribeGreenBtn>;
};
export const LogOutBtn = ({ children }) => {
  return <StyledLogOutBtn>{children}</StyledLogOutBtn>;
};
export const CancelBtn = ({ children }) => {
  return <StyledCancelBtn>{children}</StyledCancelBtn>;
};

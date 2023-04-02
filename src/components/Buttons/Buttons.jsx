import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledSearchBlackBtn,
  StyledSearchGreenBtn,
  StyledSignInBtn,
  StyledSubscribeGreenBtn,
  StyledLogOutBtn,
  StyledCancelBtn,
  StyledSeeAllBtn,
  StyledOtherCatBtn,
} from './Buttons.styled';

export const SearchBlackBtn = ({ children }) => {
  return <StyledSearchBlackBtn type="submit">{children}</StyledSearchBlackBtn>;
};
export const SearchGreenBtn = ({ children }) => {
  return <StyledSearchGreenBtn type="submit">{children}</StyledSearchGreenBtn>;
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

export const SeeAllBtn = ({ children, href }) => {
  return (
    <StyledSeeAllBtn>
      <Link role="button" to={href}>
        {children}
      </Link>
    </StyledSeeAllBtn>
  );
};

export const OtherCatBtn = ({ children }) => {
  return (
    <StyledOtherCatBtn>
      <Link role="button" to="/categories">
        {children}
      </Link>
    </StyledOtherCatBtn>
  );
};

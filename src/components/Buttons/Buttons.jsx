import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledSearchBlackBtn,
  StyledSearchGreenBtn,
  StyledSubscribeGreenBtn,
  StyledLogOutBtn,
  StyledCancelBtn,
  StyledSeeAllBtn,
  StyledOtherCatBtn,
  StyledAddRecipeBtn,
} from 'components/Buttons/Buttons.styled';

export const SearchBlackBtn = ({ children }) => {
  return <StyledSearchBlackBtn type="submit">{children}</StyledSearchBlackBtn>;
};
export const SearchGreenBtn = ({ children }) => {
  return <StyledSearchGreenBtn type="submit">{children}</StyledSearchGreenBtn>;
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
      <Link role="button" to="/categories/breakfast">
        {children}
      </Link>
    </StyledOtherCatBtn>
  );
};

export const AddRecipeBtn = ({ children }) => {
  return <StyledAddRecipeBtn>{children}</StyledAddRecipeBtn>;
};

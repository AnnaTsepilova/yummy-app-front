import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';

import SearchGlass from 'components/Header/HeaderNavigation/SearchGlass/SearchGlass';

import {
  NavLinkStyle,
  SearchGlassWrapper,
} from 'components/Header/HeaderNavigation/SearchNavLink/SearchNavLink.styled';

import { getRecipesBySearchQuery } from 'redux/commonRecipes/commonSelectors';

const SearchNavLink = ({ to, title, closeMenu = () => {} }) => {
  const recipesBySearchQuery = useSelector(getRecipesBySearchQuery);
  const isMobile = useMediaQuery('(max-width: 1439px)');
  const resetSearch = () => {
    recipesBySearchQuery.results = [];
  };
  return (
    <NavLinkStyle to={to} onClick={(() => closeMenu(), () => resetSearch())}>
      <SearchGlassWrapper>
        <SearchGlass />
      </SearchGlassWrapper>
      {isMobile && title}
    </NavLinkStyle>
  );
};

export default SearchNavLink;

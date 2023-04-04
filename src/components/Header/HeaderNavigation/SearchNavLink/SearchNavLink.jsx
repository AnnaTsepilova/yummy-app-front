import React from 'react';
import { useMediaQuery } from '@mui/material';

import SearchGlass from '../SearchGlass/SearchGlass';

import { NavLinkStyle, SearchGlassWrapper } from './SearchNavLink.styled';

const SearchNavLink = ({ to, title, closeMenu = () => {} }) => {
  const isMobile = useMediaQuery('(max-width: 1439px)');
  return (
    <NavLinkStyle to={to} onClick={() => closeMenu()}>
      <SearchGlassWrapper>
        <SearchGlass />
      </SearchGlassWrapper>
      {isMobile && title}
    </NavLinkStyle>
  );
};

export default SearchNavLink;

import React from 'react';

import { NavLinkStyle } from './MainNavLink.styled';

const MainNavLink = ({ to, title, closeMenu = () => {} }) => {
  return (
    <NavLinkStyle
      to={to}
      onClick={() => closeMenu()}
    >
      {title}
    </NavLinkStyle>
  );
};

export default MainNavLink;
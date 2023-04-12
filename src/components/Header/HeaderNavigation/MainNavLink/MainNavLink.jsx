import React from 'react';

import { NavLink } from 'react-router-dom';
import { NavLinkStyle } from './MainNavLink.styled';

const MainNavLink = ({ to, title, closeMenu = () => {} }) => {
  return (
    <NavLinkStyle
      as={NavLink}
      to={to}
      activeClassName="active"
      onClick={() => closeMenu()}
    >
      {title}
    </NavLinkStyle>
  );
};

export default MainNavLink;
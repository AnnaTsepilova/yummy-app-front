import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import {
  Container,
  Btnswrapper,
  MobCloseBtn,
  StyledLink,
} from './MobileNavMenu.styled';
import { ReactComponent as NavClose } from 'images/MenuNavClose/menu-nav-close.svg';

const MobileNavMenu = ({ closeMenu, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <div>
        <Btnswrapper>
          <StyledLink to="/main" onClick={() => closeMenu()}>
            <Logo />
          </StyledLink>
          <MobCloseBtn onClick={() => closeMenu()}>
            <NavClose />
          </MobCloseBtn>
        </Btnswrapper>
        <HeaderNavigation closeMenu={closeMenu} />
      </div>
    </Container>
  );
};

export default MobileNavMenu;

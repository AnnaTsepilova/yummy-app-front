import React from 'react';
import Logo from 'components/Logo/Logo';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import {
  Container,
  Btnswrapper,
  MobCloseBtn,
  StyledLink,
  MobileNavWrapper,
} from './MobileNavMenu.styled';
import { ReactComponent as NavClose } from 'images/MenuNavClose/menu-nav-close.svg';

const MobileNavMenu = ({ closeMenu, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <MobileNavWrapper>
        <Btnswrapper>
          <StyledLink to="/main" onClick={() => closeMenu()}>
            <Logo />
          </StyledLink>
          <MobCloseBtn onClick={() => closeMenu()}>
            <NavClose />
          </MobCloseBtn>
        </Btnswrapper>
        <HeaderNavigation closeMenu={closeMenu} />
      </MobileNavWrapper>
    </Container>
  );
};

export default MobileNavMenu;

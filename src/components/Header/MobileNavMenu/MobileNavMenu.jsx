import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import MobMenuCloseBtn from './MobMenuCloseBtn/MobMenuCloseBtn';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import { Container, LogoWrapper, MobNavBtn } from './MobileNavMenu.styled';

const MobileNavMenu = ({ closeMenu }) => {
  return (
    <Container>
      <div onClick={() => closeMenu()}>
        <Link to="/main" className={LogoWrapper}>
          <Logo />
        </Link>
      </div>
      <MobMenuCloseBtn className={MobNavBtn} closeMenu={closeMenu} />
      <HeaderNavigation closeMenu={closeMenu} />
    </Container>
  );
};

export default MobileNavMenu;

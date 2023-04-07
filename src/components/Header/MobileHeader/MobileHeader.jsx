import {
  BurgerBtn,
  MobileHeaderWrp,
  UserWrp,
  LogoWrp,
} from './MobileHeader.styled';
import { ReactComponent as MobileLogo } from 'images/Logo/logo-header.svg';
import { ReactComponent as BurgerIcon } from 'images/HeaderMenu/header-menu.svg';
import { useState } from 'react';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import UserIformation from '../UserInformation/UserInformation';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNavMenu isOpen={isOpen} closeMenu={openNav} />
      <MobileHeaderWrp>
        <LogoWrp to={'/main'}>
          <MobileLogo />
        </LogoWrp>
        <UserWrp>
          <UserIformation />
          <BurgerBtn onClick={openNav}>
            <BurgerIcon />
          </BurgerBtn>
        </UserWrp>
      </MobileHeaderWrp>
    </>
  );
};

export default MobileHeader;

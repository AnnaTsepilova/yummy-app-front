import {
  BurgerBtn,
  MobileHeaderWrp,
  UserWrp,
  LogoWrp,
  BurgerStyledIcon,
} from './MobileHeader.styled';
import { ReactComponent as MobileLogo } from 'images/Logo/logo-header.svg';
import { useEffect, useState } from 'react';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import UserIformation from '../UserInformation/UserInformation';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(!isOpen);
    !isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'scroll');
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

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
            <BurgerStyledIcon />
          </BurgerBtn>
        </UserWrp>
      </MobileHeaderWrp>
    </>
  );
};

export default MobileHeader;

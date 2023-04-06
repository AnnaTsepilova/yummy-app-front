import { Link } from 'react-router-dom';
import { BurgerBtn, MobileHeaderWrp, UserWrp } from './MobileHeader.styled';
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
        <Link to={'/main'}>
          <MobileLogo />
        </Link>
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

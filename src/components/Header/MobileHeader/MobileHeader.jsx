import { Link } from 'react-router-dom';
import {
  BurgerBtn,
  MobileHeaderWrp,
  UserWrp,
  UserAvatarWrp,
  UserWithoutAvatar,
  UserName,
} from './MobileHeader.styled';
import { ReactComponent as MobileLogo } from 'images/Logo/logo-header.svg';
import { ReactComponent as BurgerIcon } from 'images/HeaderMenu/header-menu.svg';
import { useState } from 'react';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNavMenu isOpen={isOpen} closeMenu={openNav} />
      <MobileHeaderWrp>
        <Link to={'/'}>
          <MobileLogo />
        </Link>
        <UserWrp>
          <UserAvatarWrp>
            <UserWithoutAvatar />
            {/* <img src={NotFoundAvatar} alt="avatar" /> */}
          </UserAvatarWrp>

          <UserName>Name</UserName>
          <BurgerBtn onClick={openNav}>
            <BurgerIcon />
          </BurgerBtn>
        </UserWrp>
      </MobileHeaderWrp>
    </>
  );
};

export default MobileHeader;

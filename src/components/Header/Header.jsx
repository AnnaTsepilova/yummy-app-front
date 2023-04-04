import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

// import Modal from 'reusableComponents/Modal/Modal';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import MobMenuBurgerBtn from './MobileNavMenu/MobMenuBurgerBtn/MobMenuBurgerBtn';
// import UserMenu from './UserMenu/UserMenu';

import {
  HeaderWrapper,
  LogoWrapper,
  MenuBurgerWrapper,
} from './Header.styled';

const Header = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const isMobile = useMediaQuery('(max-width: 1439px)');

  // const closeMenu = () => {
  //   setMobMenu(false);
  // };
  const openMenu = () => {
    setMobMenu(true);
  };
  return (
    <div>
      <HeaderWrapper>
        <LogoWrapper to="/main">
          <HeaderLogo width={'44px'} height={'44px'} />
        </LogoWrapper>
        {!isMobile && <HeaderNavigation />}
        {/* <UserMenu /> */}
        <MenuBurgerWrapper>
          {isMobile && <MobMenuBurgerBtn openMenu={openMenu} />}
        </MenuBurgerWrapper>
        {isMobile && mobMenu && (
          {/* <Modal onClose={closeMenu}>
            <MobileNavMenu closeMenu={closeMenu} />
          </Modal> */}
        )}
      </HeaderWrapper>
    </div>
  );
};

export default Header;

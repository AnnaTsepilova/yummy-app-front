import { useMediaQuery } from '@mui/material';
// import { useState } from 'react';

import MobileHeader from './MobileHeader/MobileHeader';

// import Modal from 'reusableComponents/Modal/Modal';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
// import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
// import MobMenuBurgerBtn from './MobileNavMenu/MobMenuBurgerBtn/MobMenuBurgerBtn';
// import UserMenu from './UserMenu/UserMenu';

import { HeaderWrapper, LogoWrapper } from './Header.styled';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1439px)');

  return (
    <>
      <HeaderWrapper>
        {!isMobile ? (
          <>
            <LogoWrapper to="/main">
              <HeaderLogo width={'44px'} height={'44px'} />
            </LogoWrapper>
            <HeaderNavigation />
          </>
        ) : (
          <MobileHeader />
        )}

        {/* <UserMenu /> */}
        {/* <MenuBurgerWrapper>
          {isMobile && <MobMenuBurgerBtn openMenu={openMenu} />}
        </MenuBurgerWrapper> */}
        {/* {isMobile && mobMenu && (
          <Modal onClose={closeMenu}>
            <MobileNavMenu closeMenu={closeMenu} />
          </Modal>
        )} */}
      </HeaderWrapper>
    </>
  );
};

export default Header;

import { useMediaQuery } from '@mui/material';
import UserInformation from './UserInformation/UserInformation';
import MobileHeader from './MobileHeader/MobileHeader';

import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

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
            <UserInformation />
          </>
        ) : (
          <MobileHeader />
        )}
      </HeaderWrapper>
    </>
  );
};

export default Header;

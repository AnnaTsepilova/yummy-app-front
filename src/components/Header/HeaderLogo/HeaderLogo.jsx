import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { ReactComponent as SvgLogo } from 'images/Logo/logo-header.svg';

import { LogoSvg } from './HeaderLogo.styled';

const HeaderLogo = ({ inv }) => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const path = location.pathname;
  const isMob = path === '/main' && isMobile;
  if (isMob) {
    return <SvgLogo className={LogoSvg} />;
  }
  return <SvgLogo className={LogoSvg} />;
};

export default HeaderLogo;

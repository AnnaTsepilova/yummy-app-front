import React from 'react';
import { ReactComponent as LogoHeader } from 'images/Logo/logo-header.svg';
import { ReactComponent as LogoFooter } from 'images/Logo/logo-footer.svg';

const Logo = ({ inv, width, height }) => {
  if (inv) {
    return <LogoFooter style={{ width: width, height: height }} />;
  }
  return <LogoHeader style={{ width: width, height: height }} />;
};

export default Logo;

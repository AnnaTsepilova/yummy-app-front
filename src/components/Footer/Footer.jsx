import React from 'react';

import FooterNavigation from './FooterNavigation/FooterNavigation';
import SocialLinks from './SocialLinks/SocialLinks';

import {
  FooterWrapper,
  FooterTopContainer,
  FooterBottomContainer,
  SocialLinksContainer,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopContainer>
        <FooterNavigation />
        <SocialLinksContainer>
          <SocialLinks />
        </SocialLinksContainer>
      </FooterTopContainer>
      <FooterBottomContainer>
        <span>© 2023 All Rights Reserved.</span>
        <span> Terms of Service</span>
      </FooterBottomContainer>
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react';

import FooterNavigation from 'components/Footer/FooterNavigation/FooterNavigation';
import SocialLinks from 'components/Footer/SocialLinks/SocialLinks';

import {
  FooterWrapper,
  FooterTopContainer,
  FooterBottomContainer,
  SocialLinksContainer,
} from 'components/Footer/Footer.styled';
import { FooterBgLeaves } from 'components/SharedLayout/SharedLayout.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopContainer>
        <FooterNavigation />
        <SocialLinksContainer>
          <SocialLinks />
        </SocialLinksContainer>
        <FooterBgLeaves />
      </FooterTopContainer>
      <FooterBottomContainer>
        <span>© 2023 All Rights Reserved.</span>
        <span> Terms of Service</span>
      </FooterBottomContainer>
    </FooterWrapper>
  );
};

export default Footer;

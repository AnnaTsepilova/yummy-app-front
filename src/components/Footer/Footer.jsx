import React from 'react'

import FooterNavigation from './FooterNavigation/FooterNavigation';
import SocialLinks from './SocialLinks/SocialLinks';

import {
  FooterTopContainer,
  FooterBottomContainer,
  SocialLinksContainer,
  LeafsContainer,
} from './Footer.styled';

const Footer = () => {
  return (
    <footer>
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
      <LeafsContainer></LeafsContainer>
    </footer>
  );
}

export default Footer;

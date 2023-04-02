import React from 'react';
import { SocialLinksContainer } from './SocialLinks.styled';

import { ReactComponent as Facebook } from 'images/Icons/Facebook.svg';
import { ReactComponent as Youtube } from 'images/Icons/Youtube.svg';
import { ReactComponent as Twitter } from 'images/Icons/Twitter.svg';
import { ReactComponent as Instagram } from 'images/Icons/Instagram.svg';

const SocialLinks = ({ text }) => {
  return (
    <SocialLinksContainer>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook width="20" height="20" />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube width="20" height="15" />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter width="20" height="16" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram width="20" height="20" />
      </a>
    </SocialLinksContainer>
  );
};

export default SocialLinks;

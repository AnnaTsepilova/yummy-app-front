import React from 'react';
import { SocialLinksContainer } from './SocialLinks.styled';

import { ReactComponent as Facebook } from 'images/Icons/facebook.svg';
import { ReactComponent as Youtube } from 'images/Icons/youtube.svg';
import { ReactComponent as Twitter } from 'images/Icons/twitter.svg';
import { ReactComponent as Instagram } from 'images/Icons/instagram.svg';

const SocialLinks = ({ text }) => {
  return (
    <SocialLinksContainer>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook width="26" height="26" />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube width="28" height="22" />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter width="25" height="22" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram width="24" height="24" />
      </a>
    </SocialLinksContainer>
  );
};

export default SocialLinks;

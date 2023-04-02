import React from 'react';
import { BgImage } from 'components/WelcomeContent/WelcomeContent.styled';
import {
  PublicPageContainer,
  WelcomeTitle,
} from 'pages/WelcomePage/WelcomePage.styled';

const WelcomeContent = () => {
  return (
    <BgImage>
      <WelcomeTitle>Welcome to the app!</WelcomeTitle>
    </BgImage>
  );
};

export default WelcomeContent;

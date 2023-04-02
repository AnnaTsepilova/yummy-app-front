import React from 'react';
import {
  PublicPageContainer,
  ContentWrapper,
  BgImage,
  WelcomeTitle,
  WelcomeText,
} from 'components/WelcomeContent/WelcomeContent.styled';
import {
  RegistrationBtn,
  SignInBtnW,
} from 'components/WelcomeContent/WelcomeContent.styled';

const WelcomeContent = () => {
  return (
    <BgImage>
      <PublicPageContainer>
        <ContentWrapper>
          <WelcomeTitle>Welcome to the app!</WelcomeTitle>
          <WelcomeText>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </WelcomeText>
          <RegistrationBtn>Registration</RegistrationBtn>
          <SignInBtnW>Sign In</SignInBtnW>
        </ContentWrapper>
      </PublicPageContainer>
    </BgImage>
  );
};

export default WelcomeContent;

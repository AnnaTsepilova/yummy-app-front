import { PublicPageContainer } from 'components/WelcomeContent/WelcomeContent.styled';
import {
  FooterBgImage,
  ContentWrapper,
  SignInLink,
} from 'components/AuthContent/AuthContent.styled';

const AuthContent = () => {
  return (
    <>
      <div>AuthContent</div>

      {/* <PublicPageContainer>
        <ContentWrapper>
          <SignInLink to="/signin">Sign In</SignInLink>
        </ContentWrapper>
      </PublicPageContainer> */}

      <FooterBgImage />
    </>
  );
};

export default AuthContent;

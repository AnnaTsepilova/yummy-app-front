import {
  PageWrapper,
  ContentContainer,
  FooterBgImage,
  HeroImage,
} from 'components/AuthContent/AuthContent.styled';
import AuthForm from 'components/AuthForm/AuthForm';

const AuthContent = () => {
  return (
    <PageWrapper>
      <FooterBgImage />
      <ContentContainer>
        <HeroImage />
        <AuthForm />
      </ContentContainer>
    </PageWrapper>
  );
};

export default AuthContent;

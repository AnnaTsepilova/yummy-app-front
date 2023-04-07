import {
  PageWrapper,
  ContentContainer,
  FooterBgImage,
  HeroImage,
} from 'components/AuthContent/AuthContent.styled';
import RegisterForm from 'components/AuthForm/AuthForm';

const AuthContent = () => {
  return (
    <PageWrapper>
      <FooterBgImage />
      <ContentContainer>
        <HeroImage />
        <RegisterForm />
      </ContentContainer>
    </PageWrapper>
  );
};

export default AuthContent;
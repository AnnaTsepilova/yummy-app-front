import styled from 'styled-components';
import BgImgMob from 'images/WelcomePageImg/wellcome-page-img-mob@1x.jpg';
import BgImgTab from 'images/WelcomePageImg/wellcome-page-img-tab@1x.jpg';
import BgImgDesc from 'images/WelcomePageImg/wellcome-page-img-desc@1x.jpg';
import { SearchGreenBtn, SignInBtn } from 'components/Buttons/Buttons';

export const PublicPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 320px;
  height: 100vh;
  padding: 18px 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const ContentWrapper = styled.div`
  justify-content: center;
  width: 305px;

  @media screen and (min-width: 768px) {
    width: 505px;
  }
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;

export const BgImage = styled.div`
  min-width: 320px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('${BgImgMob}');
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  z-index: -1;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('${BgImgTab}');
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('${BgImgDesc}');
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
`;

export const WelcomeTitle = styled.h1`
  margin-top: 28px;
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: var(--primary-white);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const WelcomeText = styled.p`
  margin-bottom: 44px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-white);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const RegistrationBtn = styled(SearchGreenBtn)`
  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-white);
  text-align: center;

  /* @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  } */
  /* @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  } */
`;

export const SignInBtnW = styled(SignInBtn)`
  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-white);
  text-align: center;

  /* @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  } */
  /* @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  } */
`;

export const LogoWelcome = styled.div`
  width: 54px;
  height: 54px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BgImgMob from 'images/WelcomePageImg/wellcome-page-img-mob@1x.jpg';
import BgImgMob2 from 'images/WelcomePageImg/wellcome-page-img-mob@2x.jpg';
import BgImgTab from 'images/WelcomePageImg/wellcome-page-img-tab@1x.jpg';
import BgImgTab2 from 'images/WelcomePageImg/wellcome-page-img-tab@2x.jpg';
import BgImgDesc from 'images/WelcomePageImg/wellcome-page-img-desc@1x.jpg';
import BgImgDesc2 from 'images/WelcomePageImg/wellcome-page-img-desc@2x.jpg';

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

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${BgImgMob2}');
  }

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

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${BgImgTab2}');
    }
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

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${BgImgDesc2}');
    }
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

export const LogoWelcome = styled.div`
  width: 54px;
  height: 54px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
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

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const RegistrationLink = styled(NavLink)`
  background-color: var(--primary-green);
  border-radius: 18px 44px;
  border: none;

  padding: 12px 24px;
  min-width: 132px;

  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-white);
  text-align: center;

  cursor: pointer;
  transition: background-color 250ms var(--transition-function);

  &:hover {
    background-color: var(--secondary-black);
  }

  @media screen and (min-width: 768px) {
    padding: 22px 24px;
    min-width: 184px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    padding: 23px 24px;
  }
`;

export const SignInLink = styled(NavLink)`
  background-color: transparent;
  border-radius: 18px 44px;
  border: 2px solid var(--primary-white);

  padding: 12px 24px;
  min-width: 95px;

  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-white);
  text-align: center;

  cursor: pointer;
  transition: border 250ms var(--transition-function),
    color 250ms var(--transition-function);

  &:hover {
    border: 2px solid var(--primary-green);
    color: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    padding: 22px 24px;
    min-width: 141px;
    font-size: 16px;
  }
`;

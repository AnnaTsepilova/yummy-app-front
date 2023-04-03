import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FooterBg from 'images/AuthImages/footer-bg-auth.svg';
import FooterBgDesc from 'images/AuthImages/footer-bg-auth-desc.svg';

// order-food-pana

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

export const FooterBgImage = styled.div`
  height: 490px;
  background-image: url('${FooterBg}');
  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;
  bottom: 0;

  position: absolute;

  @media screen and (min-width: 768px) {
    height: 606px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url('${FooterBgDesc}');
    height: 325px;
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

  @media screen and (min-width: 768px) {
    padding: 22px 24px;
    min-width: 141px;
    font-size: 16px;
  }

  &:hover {
    border: 2px solid var(--primary-green);
    color: var(--primary-green);
  }
`;

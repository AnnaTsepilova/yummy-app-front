import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import FooterBg from 'images/AuthImages/footer-bg-auth.svg';
import FooterBgDesc from 'images/AuthImages/footer-bg-auth-desc.svg';
import OrderFoodSvg from 'images/AuthImages/order-food-pana.svg';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;

  min-width: 320px;
  height: 100vh;
  padding: 87px 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 96px 134px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 115px 113px;
    justify-content: left;
  }
`;

export const HeroImage = styled.div`
  width: 285px;
  height: 250px;
  background-image: url('${OrderFoodSvg}');

  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
  }

  @media screen and (min-width: 1440px) {
    width: 532px;
    height: 468px;
  }
`;

export const FooterBgImage = styled.div`
  height: 60%;
  background-image: url('${FooterBg}');
  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;
  bottom: 0;

  position: absolute;
  z-index: -1;

  @media screen and (min-width: 1440px) {
    background-image: url('${FooterBgDesc}');
    height: 42%;
  }

  @media screen and (min-width: 1600px) {
    height: 55%;
  }
`;

export const AuthLink = styled(NavLink)`
  background-color: transparent;
  min-width: 95px;

  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-white);
  text-align: center;
  text-decoration: underline;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 22px 24px;
    min-width: 141px;
    font-size: 16px;
  }

  &:hover {
    color: var(--primary-green);
  }
`;

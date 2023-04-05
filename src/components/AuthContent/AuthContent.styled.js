import styled from 'styled-components';

import FooterBg from 'images/AuthImages/footer-bg-auth.svg';
import FooterBgDesc from 'images/AuthImages/footer-bg-auth-desc.svg';
import OrderFoodSvgDesc from 'images/AuthImages/order-food-pana-white.svg';
import OrderFoodSvg from 'images/AuthImages/order-food-pana-black.svg';

export const PageWrapper = styled.div``;

export const ContentContainer = styled.div`
  display: block;
  justify-content: center;

  min-width: 320px;
  height: 100%;
  padding: 87px 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 96px 134px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    width: 1440px;
    padding: 115px 113px;
  }
`;

export const HeroImage = styled.div`
  width: 285px;
  height: 250px;
  background-image: url('${OrderFoodSvg}');
  margin: 0 auto;

  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url('${OrderFoodSvgDesc}');
    width: 532px;
    height: 468px;
    margin: 0;
  }
`;

export const FooterBgImage = styled.div`
  height: 58%;
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

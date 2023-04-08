import styled from 'styled-components';
// import ClockIcon from 'images/Recipe/clock.png';
// import backgroundDesktop from 'images/Recipe/recipie-bgd-desc@1x.png';
// import backgroundMobile from 'images/Recipe/recipie-bgd-mob@1x.png';
// import backgroundTablet from 'images/Recipe/recipie-bgd-tab@1x.png';

export const RecipeHeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 303px;
  height: auto;
  margin: 0 auto;
  padding: 80px 0 40px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 72px 0 32px;
    max-width: 506px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 100px;
    max-width: 656px;
  }
`;

export const PageTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  color: var(--primary-green);

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }
`;

export const Text = styled.p`
  margin-top: 18px;

  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  color: var(--secondary-black);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 24px;
  }
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 42px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 48px;
  }
`;

export const ClockSvg = styled.img`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Time = styled.span`
  margin-left: 5px;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: var(--primary-black);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;

import styled from 'styled-components';

export const RecipeHeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 303px;
  height: 397px;
  margin: 0 auto;
  padding: 32px 0 75px;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
    max-width: 506px;
    height: 433px;
  }

  @media screen and (min-width: 1440px) {
    // padding-top: 80px;
    padding: 72px 0 32px;
    max-width: 656px;
    height: 431px;
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
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
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

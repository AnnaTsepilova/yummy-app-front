import styled from 'styled-components';

export const TitleWrapper = styled.div`
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 38px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 343px;
  height: 42px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: var(--primary-green);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 58px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    padding-right: 40px;
    padding-left: 40px;
  }
`;

export const Products = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  align-items: center;
  letter-spacing: 0.03em;
  color: var(--primary-white);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 26px;
  }
`;

export const RightPartText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 115px;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  align-items: center;
  letter-spacing: 0.03em;
  color: var(--primary-white);

  @media screen and (min-width: 768px) {
    width: 233px;
    font-size: 18px;
    line-height: 27px;
    padding-left: 25px;
  }

  @media screen and (min-width: 1440px) {
    width: 381px;
    line-height: 26px;
  }
`;

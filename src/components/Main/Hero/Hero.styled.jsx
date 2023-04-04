import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 157px;
  @media screen and (min-width: 768px) {
    align-items: normal;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const Caption = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.005em;
  margin-bottom: 14px;
  color: var(--secondary-black);
  & span {
    color: var(--primary-green);
  }
  @media screen and (min-width: 768px) {
    font-size: 72px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 100px;
  }
`;

export const Wrapper = styled.div`
  width: 248px;
  padding: 0px 5px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 362px;
    text-align: left;
    padding: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 465px;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;

  color: var(--primary-black);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    text-align: left;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

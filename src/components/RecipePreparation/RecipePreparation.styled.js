import styled from 'styled-components';

export const MainBox = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-top: 96px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: start;

    margin-top: 100px;
  }
`;

export const Box = styled.div`
  @media screen and (max-width: 500px) {
    max-width: 440px;
  }
  @media screen and (min-width: 1440px) {
    width: 757px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1;
`;

export const List = styled.ul`
  width: 100%;
  max-width: 558px;
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    max-width: 704px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;

  :not(:first-child) {
    margin-top: 14px;
  }

  @media screen and (min-width: 768px) {
    :not(:first-child) {
      margin-top: 18px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 757px;
  }
`;

export const SpanBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;

  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: var(--primary-green);
`;

export const Span = styled.span`
  padding: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: var(--white);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.17;
  color: rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Img = styled.img`
  width: 343px;
  height: auto;
  border-radius: 8px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 433px;
    height: auto;
    margin-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: auto;
    height: 332px;
    margin-top: 0;
  }
`;

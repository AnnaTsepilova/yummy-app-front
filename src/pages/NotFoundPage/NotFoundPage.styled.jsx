import styled from 'styled-components';

import NotFoundImg from 'images/NotFound/not-found-page.svg';

export const NotFoundSvg = styled.div`
  width: 259px;
  height: 170px;
  margin: 100px auto 0 auto;

  background-image: url(${NotFoundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 259px 170px;

  @media screen and (min-width: 768px) {
    width: 498px;
    height: 327px;
    background-size: 498px 331px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 138px;
  }
`;

export const NotFoundContentWrapper = styled.div`
  width: 206px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const NotFoundTitle = styled.h1`
  margin-top: 14px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black);
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const NotFoundText = styled.p`
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 14px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

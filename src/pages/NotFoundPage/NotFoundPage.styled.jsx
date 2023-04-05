import styled from 'styled-components';

import NotFoundImg from 'images/NotFound/not-found-page.svg';

export const NotFoundSvg = styled.div`
  min-width: 320px;
  // padding: 18px 16px 0 16px;
  margin: 0 auto;

  background-image: url(${NotFoundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 259px 170px;

  @media screen and (min-width: 768px) {
    background-size: 498px 331px;
  }
  /* @media screen and (min-width: 1440px) {
    background-size: 498px 331px;
  } */
`;

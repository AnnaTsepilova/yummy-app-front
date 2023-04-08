import styled from 'styled-components';

import imgBg1x from 'images/Recipe/flat-lay-assortment-vegetables@1x.jpg';
import imgBg2x from 'images/Recipe/flat-lay-assortment-vegetables@2x.jpg';

export const RecipeBgHero = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 455px;
  margin: 0 auto;
  z-index: -1;

  background-image: url(${imgBg1x});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  @media screen and (min-width: 768px) {
    height: 495px;
  }

  @media screen and (min-width: 1440px) {
    height: 493px;
  }

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imgBg2x});
  }
`;

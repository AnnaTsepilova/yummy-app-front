import styled from 'styled-components';
import imgBg1x from 'images/Recipe/recipie-bgd-desc@1x.png';
import imgBg2x from 'images/Recipe/recipie-bgd-desc@2x.png';

export const HeroBackground = styled.div`
  width: 100%;
  width: 1440px;
  height: 455px;
  position: relative;
  margin: 0 auto;
  z-index: -1;
  /* background-position: center center; */
  background-position: -220px -150px;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${imgBg1x});

  @media screen and (min-width: 768px) {
    /* .HeroBackground {
      top: -68px;
    } */
  }

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imgBg2x});
  }
`;

import styled from 'styled-components';
import BgImgMob from 'images/WelcomePageImg/wellcome-page-img-mob@1x.jpg';

export const BgImage = styled.div`
  width: 320px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('${BgImgMob}');

  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  /* @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  } */
`;

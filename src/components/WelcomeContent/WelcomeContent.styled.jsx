import styled from 'styled-components';
import BgImgMob from 'images/WelcomePageImg/wellcome-page-img-mob@1x.jpg';
import BgImgTab from 'images/WelcomePageImg/wellcome-page-img-tab@1x.jpg';
import BgImgDesc from 'images/WelcomePageImg/wellcome-page-img-desc@1x.jpg';

export const BgImage = styled.div`
  min-width: 320px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('${BgImgMob}');
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  z-index: -1;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('${BgImgTab}');
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('${BgImgDesc}');
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
`;

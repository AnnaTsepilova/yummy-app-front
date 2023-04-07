import styled from 'styled-components';
// import ClockIcon from 'images/Recipe/clock.png';
import backgroundDesktop from 'images/Recipe/recipie-bgd-desc@1x.png';
import backgroundMobile from 'images/Recipe/recipie-bgd-mob@1x.png';
import backgroundTablet from 'images/Recipe/recipie-bgd-tab@1x.png';

export const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  width: 100%;
  height: 455px;

  background-image: url(${backgroundMobile});
  @media screen and (min-width: 768px) {
    height: 495px;
    background-image: url(${backgroundTablet});
  }
  @media screen and (min-width: 1440px) {
    height: 493px;
    background-image: url(${backgroundDesktop});
  }
`;

export const MainPageTitle = styled.h1`
  position: relative;
  z-index: 3;

  padding-top: 30px;
  color: var(--primary-green);
  text-align: center;
  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;

export const Text = styled.p`
  position: relative;
  z-index: 3;

  width: 100%;
  max-width: 656px;
  margin: 0 auto;
  margin-top: 18px;
  color: var(--secondary-black);
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 24px;
  }
`;

export const Button = styled.button`
  position: relative;
  z-index: 3;

  min-width: 200px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  height: 35px;
  font-size: 10px;
  line-height: 1.5;
  display: block;
  background-color: transparent;
  padding: 0 18px;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 59px;
    font-size: 16px;
    line-height: 1.5;
    padding: 0 44px;
  }
`;

export const Box = styled.div`
  position: relative;
  z-index: 3;

  margin-top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

// export const ClockSvg = styled(ClockIcon)`
//   width: 18px;
//   height: 18px;
//   @media screen and (min-width: 768px) {
//     width: 24px;
//     height: 24px;
//   }
// `;
export const Time = styled.span`
  margin-left: 5px;
   color: var(--secondary-black);
  font-weight:  500;
 font-size: 14px;
  line-height: 1.43
  letter-spacing: -0.24px;

`;

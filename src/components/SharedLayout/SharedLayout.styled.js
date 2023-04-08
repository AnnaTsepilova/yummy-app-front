import styled from 'styled-components';

import LeavesBgLeftMob from 'images/LeavesOnMainBottom/leaves-on-main-bottom-mob-cut@1x.png';
import LeavesBgLeftMob2 from 'images/LeavesOnMainBottom/leaves-on-main-bottom-mob-cut@2x.png';
import LeavesBgLeftTab from 'images/LeavesOnMainBottom/leaves-on-main-bottom-tab-cut@1x.png';
import LeavesBgLeftTab2 from 'images/LeavesOnMainBottom/leaves-on-main-bottom-tab-cut@2x.png';
import LeavesBgLeftDesc from 'images/LeavesOnMainBottom/leaves-on-main-bottom-desc-cut@1x.png';
import LeavesBgLeftDesc2 from 'images/LeavesOnMainBottom/leaves-on-main-bottom-desc-cut@2x.png';

export const Container = styled.div`
  min-width: 320px;
  padding: 18px 16px 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 500px) and (max-width: 767px) {
    width: 475px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const FooterBgLeaves = styled.div`
  position: absolute;
  top: -27%;
  left: 0;
  min-width: 320px;
  background-image: url('${LeavesBgLeftMob}');
  /* width: 256px; */
  height: 125px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  z-index: -2;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${LeavesBgLeftMob2}');
  }

  @media screen and (min-width: 768px) {
    background-image: url('${LeavesBgLeftTab}');
    /* height: 646px; */

    top: -28%;
    left: 0;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${LeavesBgLeftTab2}');
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url('${LeavesBgLeftDesc}');
    /* height: 852px; */

    top: -60%;
    left: 0;
    width: 696px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${LeavesBgLeftDesc2}');
    }
  }
`;

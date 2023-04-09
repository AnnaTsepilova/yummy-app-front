import styled from 'styled-components';

import LeavesBgLeftMob from 'images/LeavesOnMainBottom/leaves-on-main-bottom-mob-cut@1x.png';
import LeavesBgLeftMob2 from 'images/LeavesOnMainBottom/leaves-on-main-bottom-mob-cut@2x.png';
import LeavesBgLeftTab from 'images/LeavesOnMainBottom/leaves-on-main-bottom-tab-cut@1x.png';
import LeavesBgLeftTab2 from 'images/LeavesOnMainBottom/leaves-on-main-bottom-tab-cut@2x.png';
import LeavesBgLeftDesc from 'images/LeavesOnMainBottom/leaves-on-main-bottom-desc-cut@1x.png';
import LeavesBgLeftDesc2 from 'images/LeavesOnMainBottom/leaves-on-main-bottom-desc-cut@2x.png';

export const Container = styled.div`
  min-width: 320px;
  padding: 18px 16px 100px 16px;
  margin: 0 auto;

  @media screen and (min-width: 500px) and (max-width: 767px) {
    width: 475px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const FooterBgLeaves = styled.div`
  position: absolute;
  top: -23%;
  left: 0;
  min-width: 320px;
  height: 125px;
  background-image: url('${LeavesBgLeftMob}');
  background-repeat: no-repeat;
  background-size: 320px 125px;
  background-position: left;
  z-index: -2;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${LeavesBgLeftMob2}');
  }

  @media screen and (min-width: 768px) {
    top: -48%;
    left: 0;
    width: 500px;
    height: 227px;
    background-image: url('${LeavesBgLeftTab}');
    background-size: 500px 227px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${LeavesBgLeftTab2}');
    }
  }

  @media screen and (min-width: 1440px) {
    top: -60%;
    left: 0;
    width: 696px;
    height: 290px;
    background-image: url('${LeavesBgLeftDesc}');
    background-size: 696px 290px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${LeavesBgLeftDesc2}');
    }
  }
`;

import styled from 'styled-components';

import DotsMob from 'images/Search/dots-mob.svg';
import DotsTab from 'images/Search/dots-tab.svg';
import DotsDesc from 'images/Search/dots-desc.svg';

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

  /* background-image: url('${DotsMob}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 70% 76px;
  background-size: 240px 74px; */
  // z-index: -1;

  @media screen and (min-width: 500px) and (max-width: 767px) {
    width: 475px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    /* background-image: url('${DotsTab}');
    background-position: 210px 95px;
    background-size: 525px 85px; */
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;

    /* background-image: url('${DotsDesc}');
    background-position: 330px 110px;
    background-size: 940px 98px; */
  }
`;

export const FooterBgLeaves = styled.div`
  min-width: 320px;
  background-image: url('${LeavesBgLeftMob}');
  /* width: 256px; */
  height: 125px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  z-index: -1;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${LeavesBgLeftMob2}');
  }

  @media screen and (min-width: 768px) {
    background-image: url('${LeavesBgLeftTab}');
    /* height: 646px; */
    height: 260px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${LeavesBgLeftTab2}');
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url('${LeavesBgLeftDesc}');
    /* height: 852px; */
    height: 280px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${LeavesBgLeftDesc2}');
    }
  }
`;

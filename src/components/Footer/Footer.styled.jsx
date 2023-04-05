import styled from 'styled-components';

import LeavesBgRightBottomMob from 'images/FooterBackground/footer-background-mob@1x.png';
import LeavesBgRightBottomMob2 from 'images/FooterBackground/footer-background-mob@2x.png';
import LeavesBgRightBottomTab from 'images/FooterBackground/footer-background-tab@1x.png';
import LeavesBgRightBottomTab2 from 'images/FooterBackground/footer-background-tab@2x.png';
import LeavesBgRightBottomDesc from 'images/FooterBackground/footer-background-desc@2x.png';
import LeavesBgRightBottomDesc2 from 'images/FooterBackground/footer-background-desc@2x.png';

export const FooterWrapper = styled.footer`
  background-image: url('${LeavesBgRightBottomMob}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;

  background-size: 172px 160px;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${LeavesBgRightBottomMob2}');
  }

  @media screen and (min-width: 768px) {
    background-image: url('${LeavesBgRightBottomTab}');
    background-size: 313px 290px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${LeavesBgRightBottomTab2}');
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url('${LeavesBgRightBottomDesc}');
    background-size: 474px 438px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${LeavesBgRightBottomDesc2}');
    }
  }
`;

export const FooterTopContainer = styled.div`
  background-color: var(--secondary-black);
  position: relative;
  width: 100%;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 44px;
  padding-bottom: 18px;

  @media only screen and (min-width: 768px) {
    padding-top: 38px;
    padding-bottom: 24px;
  }

  @media only screen and (min-width: 1440px) {
    padding-top: 41px;
    padding-bottom: 50px;
  }
`;

export const FooterBottomContainer = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 73px;

  & > :first-child {
    margin-right: 14px;
    font-weight: 500;
  }

  & span {
    font-family: Poppins;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: -0.01em;
    text-align: left;
    opacity: 0.5;
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    height: 78px;

    & > :first-child {
      margin-right: 28px;
    }

    & span {
      font-size: 14px;
      line-height: 14px;
    }
  }

  @media only screen and (min-width: 1440px) {
    height: 114px;

    & span {
      font-size: 14px;
      line-height: 14px;
    }

    & > :first-child {
      margin-right: 40px;
    }
  }
`;

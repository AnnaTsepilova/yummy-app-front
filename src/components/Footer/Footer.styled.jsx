import styled from 'styled-components';

export const FooterTopContainer = styled.div`
  background-color: var(--secondary-black);
  position: relative;
  max-width: 100% !important;
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

  background-image: url();
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 160px 172px;

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

  @media only screen and (min-resolution: 192dpi) {
    background-image: url();
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    height: 78px;

    background-image: url();
    background-size: 290px 313px;

    & > :first-child {
      margin-right: 28px;
    }

    & span {
      font-size: 14px;
      line-height: 14px;
    }

    @media only screen and (min-resolution: 192dpi) {
      background-image: url();
      background-size: 290px 313px;
    }
  }

  @media only screen and (min-width: 1440px) {
    height: 114px;

    background-image: url();
    background-size: 438px 474px;

    & span {
      font-size: 14px;
      line-height: 14px;
    }

    @media only screen and (min-resolution: 192dpi) {
      background-image: url();
      background-size: 438px 474px;
    }
    & > :first-child {
      margin-right: 40px;
    }
  }
`;

export const LeafsContainer = styled.div`
  position: absolute;
  top: -240px;
  left: 0;
  width: 320px;
  height: 240px;
  background-image: url('../../images/LeafsOnMainBottom/leafs-on-main-bottom-mob@1x.png');
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;

  @media only screen and (min-width: 768px) {
    top: -442px;
    width: 500px;
    height: 442px;
    background-image: url('../../images/LeafsOnMainBottom/leafs-on-main-bottom-tab@1x.png');
  }

  @media only screen and (min-width: 1440px) {
    top: -547px;
    width: 696px;
    height: 547px;
    background-image: url('../../images/LeafsOnMainBottom/leafs-on-main-bottom-desc@1x.png');
  }
`;
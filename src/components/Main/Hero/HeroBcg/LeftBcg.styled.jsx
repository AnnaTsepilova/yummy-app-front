import styled from 'styled-components';

export const Left = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -2;
  width: 48px;
  height: 202px;
  background-image: url('../../../images/HeroMain/hero-left-background/hero-left-background-mob.png');
  background-size: cover;
  @media screen and (min-width: 768px) {
    top: 0;
    width: 67px;
    height: 323px;
    background-image: url('../../../images/HeroMain/hero-left-background/hero-left-background-tab.png');
  }
  @media screen and (min-width: 1440px) {
    width: 116px;
    height: 398px;
    background-image: url('../../../images/HeroMain/hero-left-background/hero-left-background-desc.png');
  }
`;

export const Right = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: -2;
  width: 375px;
  height: 824px;
  background-image: url('../../../images/HeroMain/hero-right-background/hero-left-background-mob.png');
  background-size: cover;
  @media screen and (min-width: 768px) {
    top: 0;
    width: 596px;
    height: 789px;
    background-image: url('../../../images/HeroMain/hero-right-background/hero-left-background-tab.png');
  }
  @media screen and (min-width: 1440px) {
    width: 918px;
    height: 833px;
    background-image: url('../../../images/HeroMain/hero-right-background/hero-left-background-desc.png');
  }
`;

export const Thumb = styled.div`
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  width: 320px;
  height: 296px;
  background-image: url('../../../../assets/images/HeroMain/V2/plate.png');
  background-size: contain;
`;

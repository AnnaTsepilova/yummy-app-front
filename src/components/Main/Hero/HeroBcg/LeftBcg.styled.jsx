import styled from 'styled-components';
import leftBcgDesc from '../../../../images/HeroMain/hero-left-background/hero-left-background-desc.png';
import leftBcgTab from '../../../../images/HeroMain/hero-left-background/hero-left-background-tab.png';
import leftBcgMob from '../../../../images/HeroMain/hero-left-background/hero-left-background-mob.png';
import rightBcgDesc from '../../../../images/HeroMain/hero-right-background/hero-left-background-desc.png';
import rightBcgTab from '../../../../images/HeroMain/hero-right-background/hero-left-background-tab.png';
import rightBcgMob from '../../../../images/HeroMain/hero-right-background/hero-left-background-mob.png';

export const Left = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -1;
  width: 48px;
  height: 202px;
  background-image: url('${leftBcgMob}');
  background-size: cover;
  @media screen and (min-width: 768px) {
    top: 0;
    width: 67px;
    height: 323px;
    background-image: url('${leftBcgTab}');
  }
  @media screen and (min-width: 1440px) {
    width: 116px;
    height: 398px;
    background-image: url('${leftBcgDesc}');
  }
`;

export const Right = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: -2;
  width: 375px;
  height: 824px;
  background-image: url('${rightBcgMob}');
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    top: 0;
    right: 0;
    width: 580px;
    height: 789px;
    background-image: url('${rightBcgTab}');
  }
  @media screen and (min-width: 1440px) {
    width: 918px;
    height: 833px;
    background-image: url('${rightBcgDesc}');
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
  background-size: contain;
`;

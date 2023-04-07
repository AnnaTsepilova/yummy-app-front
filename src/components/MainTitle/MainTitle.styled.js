import styled from 'styled-components';

// DOTs
import DotsMob from 'images/Search/dots-mob.svg';
import DotsTab from 'images/Search/dots-tab.svg';
import DotsDesc from 'images/Search/dots-desc.svg';

export const MainTitleStyled = styled.h1`
  width: 100%;

  padding-top: 50px;
  padding-bottom: 50px;

  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: var(--title-color);

  // DOTs
  background-image: url('${DotsMob}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right 12px;
  background-size: 240px 74px;

  @media screen and (min-width: 768px) {
    font-size: 32px;

    padding-top: 72px;
    padding-bottom: 100px;

    // DOTs
    background-image: url('${DotsTab}');
    background-position: 100% 21px;
    background-size: 525px 85px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 100px;
    padding-bottom: 100px;

    font-size: 44px;

    // DOTs
    background-image: url('${DotsDesc}');
    background-position: 80% 53px;
    background-size: 940px 98px;
  } ;
`;

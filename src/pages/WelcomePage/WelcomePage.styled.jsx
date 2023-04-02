import styled from 'styled-components';

export const PublicPageContainer = styled.div`
  min-width: 320px;
  padding-top: 18px;
  padding-right: 16px;
  padding-left: 16px;
  margin: 0 auto;

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

export const WelcomeTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: var(--primary-white);
  z-index: 111;

  /* @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  } */
`;
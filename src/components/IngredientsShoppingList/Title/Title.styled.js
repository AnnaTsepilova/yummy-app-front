const { default: styled } = require('styled-components');

export const TitleShop = styled.h1`
  padding-top: 50px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--titleColor);
  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding-top: 100px;
  }
`;

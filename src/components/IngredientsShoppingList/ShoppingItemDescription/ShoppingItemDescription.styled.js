const { default: styled } = require('styled-components');

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 107px;
  height: 100%;

  padding-right: 10px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 328px;
  }

  @media screen and (min-width: 1440px) {
    width: 650px;
  }
`;

export const Name = styled.span`
  color: var(--mainTextColor);
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

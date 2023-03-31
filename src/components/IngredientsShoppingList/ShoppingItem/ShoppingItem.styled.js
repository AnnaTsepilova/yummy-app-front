const { default: styled } = require('styled-components');

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 343px;
  min-height: 86px;
  padding-right: 19px;
  border-radius: 8px;
  border-bottom: 1px solid var(--lineColor);
  padding-bottom: 12px;
  padding-top: 12px;

  @media screen and (min-width: 768px) {
    width: 704px;
    min-height: 140px;
    padding-right: 45px;
    /* margin-top: 24px; */
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    height: 100%;
    padding-right: 68px;
    padding-left: 40px;
    padding-bottom: 12px;
    padding-top: 12px;
  }
`;

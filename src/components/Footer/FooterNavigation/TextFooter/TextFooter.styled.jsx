import styled from 'styled-components';

export const LogoText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  font-family: Poppins;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 0.015em;
  text-align: left;

  & span {
    margin-left: 8px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;

    & span {
      margin-left: 12px;
    }
  }
`;

export const FooterLeftText = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-right: 173px;
    padding-left: 20px;
    list-style-type: disc;
    display: flex;
    flex-direction: column;

    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: -0.02em;

    & li:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-right: 159px;
    font-size: 18px;
    line-height: 24px;
    max-width: 418px;

    & li:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;


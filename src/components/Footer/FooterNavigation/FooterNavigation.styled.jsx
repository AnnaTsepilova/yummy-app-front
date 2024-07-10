import styled from 'styled-components';

export const FooterNavigationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;

  color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 50px;
    width: 768px;

    & > :not(first-child) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: no-wrap;
    align-items: start;
    width: 1440px;
  }
`;

export const SubscribeContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    max-width: 338px;
    margin-left: 235px;

    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
  }
`;

export const SubscribeTitle = styled.h3`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 14px;
  @media only screen and (max-width: 1439px) {
    display: none;
  }
`;

export const SubscribeText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 28px;
  @media only screen and (max-width: 1439px) {
    display: none;
  }
`;

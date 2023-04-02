import styled from 'styled-components';

export const FooterRightText = styled.div`
  & h3 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }

  & p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
  }

  @media only screen and (max-width: 1439px) {
    & h3,
    & p {
      display: none;
    }
  }

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

    & h3 {
      margin-bottom: 14px;
    }

    & p {
      margin-bottom: 28px;
    }
  }
`;

export const FooterSubscribeFormDiv = styled.div`
  width: 204px;
  height: 84px;

  @media only screen and (min-width: 768px) {
    width: 442px;
    height: 50px;
    margin: 72px 150px 38px;
  }

  @media only screen and (min-width: 1440px) {
    margin: 0;
    width: 100%;
    height: 135px;
  }
`;
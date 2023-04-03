import styled from 'styled-components';

export const FooterNavigationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;

  color: white;

  & > :not(first-child) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
      padding-top: 50px;

    & > :not(first-child) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1440px) {
      flex-wrap: no-wrap;
      align-items: start;
    }
`;

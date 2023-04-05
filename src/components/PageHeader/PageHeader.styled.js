import styled from 'styled-components';

export const StyledPageHeader = styled.h2`
  margin-top: 53px;
  margin-bottom: 50px;

  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  letter-spacing: -0.02em;

  color: #001833;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 73px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    margin-top: 102px;
  } ;
`;

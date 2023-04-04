import styled from 'styled-components';

export const SearchWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  width: 100%;
  height: auto;
`;

export const SearchText = styled.p`
  line-height: 14px;
  letter-spacing: -0.02em;
  opacity: 0.5;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const SearchImage = styled.div`
  margin: 0 auto;
  margin-bottom: 24px;
  width: 208px;
  height: 133px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    width: 350px;
    height: 225px;
  }
`;

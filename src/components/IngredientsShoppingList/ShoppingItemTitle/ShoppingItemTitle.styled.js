import styled from 'styled-components';

export const Title = styled.p`
  margin-left: 10px;
  max-width: 95px;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;

  color: var(--primary-gray);

  @media screen and (min-width: 768px) {
    margin-left: 16px;
    max-width: 208px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    max-width: 547px;
  }
`;

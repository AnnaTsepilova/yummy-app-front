import styled from 'styled-components';

export const Table = styled.div`
  display: grid;
  gap: 32px;
  margin-top: 50px;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    row-gap: 100px;
  }
`;

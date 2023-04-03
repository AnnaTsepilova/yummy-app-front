import styled from 'styled-components';

export const Table = styled.div`
  display: grid;
  gap: 14px;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 32px;
  max-width: calc(100vw - 48px);
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-bottom: 200px;
    margin-top: 50px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    row-gap: 100px;
  }
`;

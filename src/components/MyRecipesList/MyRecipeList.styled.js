import styled from 'styled-components';

export const RecipeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const RecipeTitle = styled.h2`
  margin-bottom: 50px;

  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  letter-spacing: -0.02em;

  color: #001833;

  @media screen and (min-width: 768px) {
    font-size: 32px;

    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
  } ;
`;

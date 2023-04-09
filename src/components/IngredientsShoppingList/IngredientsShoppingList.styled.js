import styled from 'styled-components';

import {
  Box,
  List,
} from 'components/RecipeInngredientsList/RecipeInngredientsList.styled';

export const BoxSL = styled(Box)`
  margin-top: 0;
`;

export const ListSL = styled(List)`
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

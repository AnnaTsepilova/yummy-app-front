import styled from 'styled-components';

import { ListHeaderText } from 'components/RecipeInngredientsList/RecipeInngredientsList.styled';

export const ListHeaderTextSL = styled(ListHeaderText)`
  :last-child {
    margin-left: 24px;

    @media screen and (min-width: 768px) {
      margin-left: 78px;
    }

    @media screen and (min-width: 1440px) {
      margin-left: 142px;
    }
  }
`;

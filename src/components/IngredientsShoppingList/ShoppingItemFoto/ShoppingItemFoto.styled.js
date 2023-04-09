import styled from 'styled-components';

import { Img } from 'components/RecipeInngredientsList/RecipeInngredientsList.styled';

export const ImgSL = styled(Img)`
  padding: 6px;
  background-color: var(--background-light-green);
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    padding: 8px;

    width: 81px;
    height: 81px;
  }
`;

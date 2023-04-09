import React from 'react';

import { Wrapper } from 'components/RecipeInngredientsList/RecipeInngredientsList.styled';
import { ImgSL } from 'components/IngredientsShoppingList/ShoppingItemFoto/ShoppingItemFoto.styled';

const ShoppingItemPhoto = ({ image }) => {
  return (
    <Wrapper>
      <ImgSL src={image} alt="ingredient" />
    </Wrapper>
  );
};

export default ShoppingItemPhoto;

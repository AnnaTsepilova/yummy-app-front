import React from 'react';

import { Wrapper } from 'components/RecipeInngredientsList/RecipeInngredientsList.styled';
import { ImgSL } from 'components/IngredientsShoppingList/ShoppingItemFoto/ShoppingItemFoto.styled';
import { ReactComponent as DefaultImage } from 'images/Plugs/image.svg';

const ShoppingItemPhoto = ({ image }) => {
  return (
    <Wrapper>
      {image !== '' ? <ImgSL src={image} alt="ingredient" /> : <DefaultImage />}
    </Wrapper>
  );
};

export default ShoppingItemPhoto;

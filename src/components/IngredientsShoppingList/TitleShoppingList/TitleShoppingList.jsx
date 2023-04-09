import React from 'react';
// import {
//   TitleWrapper,
//   Title,
//   Products,
//   RightPartText,
// } from 'components/IngredientsShoppingList/TitleShoppingList/TitleShoppingList.styled';

import {
  ListHeader,
  ListHeaderText,
} from 'components/RecipeInngredientsList/RecipeInngredientsList.styled';
import { ListHeaderTextSL } from 'components/IngredientsShoppingList/TitleShoppingList/TitleShoppingList.styled';

const TitleShoppingList = () => {
  return (
    <ListHeader>
      <ListHeaderText>Products</ListHeaderText>
      <div>
        <ListHeaderTextSL>Number</ListHeaderTextSL>
        <ListHeaderTextSL>Remove</ListHeaderTextSL>
      </div>
    </ListHeader>
  );
};

export default TitleShoppingList;

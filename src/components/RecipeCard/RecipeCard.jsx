import React from 'react';

// import card from './cardrecipe.jpg';
import { Card, RecipePicture, RecipeTitle } from './RecipeCard.styled';

export const RecipeCard = () => {
  return (
    <Card>
      {/* <RecipePicture src={card} alt="" /> */}
      <RecipeTitle>Banana Pankakes</RecipeTitle>
    </Card>
  );
};

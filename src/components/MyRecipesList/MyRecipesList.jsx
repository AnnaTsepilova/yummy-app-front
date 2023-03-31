import React from 'react';
import { RecipeList, RecipeTitle } from './MyRecipeList.styled.js';

const MyRecipesList = ({ children }) => {
  return (
    <>
      <RecipeTitle>My recipes</RecipeTitle>
      <RecipeList>{children}</RecipeList>
    </>
  );
};

export default MyRecipesList;

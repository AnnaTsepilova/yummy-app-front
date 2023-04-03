import React from 'react';
import { RecipeList } from './MyRecipeList.styled.js';
import MyRecipesItem from 'components/MyRecipesList/MyRecipesItem/MyRecipesItem';

const MyRecipesList = ({ items, btnStyle, removeFnc }) => {
  return (
    <RecipeList>
      {items.map(item => {
        return (
          <MyRecipesItem
            key={item._id}
            data={item}
            btnStyle={btnStyle}
            removeFnc={removeFnc}
          />
        );
      })}
    </RecipeList>
  );
};

export default MyRecipesList;

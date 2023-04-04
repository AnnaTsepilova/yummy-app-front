import React from 'react';
import { RecipeList } from './MyRecipeList.styled.js';
import MyRecipesItem from 'components/MyRecipesList/MyRecipesItem/MyRecipesItem';
import NotFoundImg from 'images/Search/not-found-img.png';

const MyRecipesList = ({ items, btnStyle, removeFnc }) => {
  return (
    <>
      {items.length === 0 ? (
        <img src={NotFoundImg} alt="Not found" />
      ) : (
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
      )}
    </>
  );
};

export default MyRecipesList;

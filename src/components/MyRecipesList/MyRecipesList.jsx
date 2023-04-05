import React from 'react';
import { RecipeList } from './MyRecipeList.styled.js';
import MyRecipesItem from 'components/MyRecipesList/MyRecipesItem/MyRecipesItem';
import { SearchNotFound } from 'components/SearchedRecipesList/SearchNotFound.jsx';

const MyRecipesList = ({ items, btnStyle, removeFnc }) => {
  return (
    <>
      {items.length === 0 ? (
        <SearchNotFound text={'Thre will be your recipes here'} />
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

import React from 'react';

import { RecipeList } from 'components/MyRecipesList/MyRecipeList.styled';
import MyRecipesItem from 'components/MyRecipesList/MyRecipesItem/MyRecipesItem';
import NotFound from 'components/NotFound/NotFound';

const MyRecipesList = ({ items, btnStyle, removeFnc }) => {
  return (
    <>
      {items.length === 0 ? (
        <NotFound text={'Your recipes will be soon here.'} />
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

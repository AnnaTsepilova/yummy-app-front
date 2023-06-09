import React from 'react';

import { RecipeList } from 'components/MyRecipesList/MyRecipeList.styled';
import MyRecipesItem from 'components/MyRecipesList/MyRecipesItem/MyRecipesItem';
import NotFound from 'components/NotFound/NotFound';

const MyRecipesList = ({ items, btnStyle, removeFnc, change, page }) => {
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
                change={change}
                page={page}
              />
            );
          })}
        </RecipeList>
      )}
    </>
  );
};

export default MyRecipesList;

import React, { useEffect } from 'react';
import { RecipeBcg } from './RecipePageHero.styled';
import { createPortal } from 'react-dom';
import RecipeHeroTextAdd from './RecipeHeroTextAdd';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import {
//   selectIsLoading,
//   selectRecipe,
// } from 'redux/userRecipes/userRecipesSelectors';
import { getRecipeByIdAPI, getShoppingList } from 'service/API/dishesApi';

const mainRoot = document.querySelector('#racipe_bcg');

const RecipeBckg = () => {
  return createPortal(<RecipeBcg></RecipeBcg>, mainRoot);
};

const RecipePageHero = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const { id } = useParams();
  // const { time, description, _id, preview, instructions } =
  //   useSelector(selectRecipe);

  // useEffect(() => {
  //   dispatch(getShoppingList());
  //   dispatch(getRecipeByIdAPI(id));
  // }, [dispatch, id]);

  return (
    <RecipeBckg>
      <RecipeHeroTextAdd
      // title={title}
      // description={description}
      // time={time}
      // id={_id}
      />
    </RecipeBckg>
  );
};

export default RecipePageHero;

import React, { useEffect } from 'react';
import { RecipeBcg } from './RecipePageHero.styled';
import { createPortal } from 'react-dom';
import RecipeHeroTextAdd from './RecipeHeroTextAdd/RecipeHeroTextAdd';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectIsLoading,
//   selectRecipe,
// } from 'redux/userRecipes/userRecipesSelectors';
// import { getRecipeByIdAPI, getShoppingList } from 'service/API/dishesApi';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import {
  getRecipeById,
  getUserShoppingList,
} from 'redux/userRecipes/userResipesOperations';
import { useLocation } from 'react-router';
import { selectRecipe } from 'redux/userRecipes/userRecipesSelectors';

const mainRoot = document.querySelector('#racipe_bcg');

const RecipeBckg = () => {
  return createPortal(<RecipeBcg></RecipeBcg>, mainRoot);
};

const RecipePageHero = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  const recipe = useSelector(selectRecipe);
  const ingredients = recipe.ingredients;

  // const { title, description, time } = useSelector(selectRecipe);

  useEffect(() => {
    dispatch(getUserShoppingList());
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  return (
    <>
      <RecipeBckg></RecipeBckg>
      <RecipeHeroTextAdd
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
        id={recipe.id}
      />
      <RecipeInngredientsList ingredients={ingredients} recipeId={id} />
      <RecipePreparation
        preview={recipe.preview}
        title={recipe.title}
        instructions={recipe.instructions}
      />
    </>
  );
};

export default RecipePageHero;

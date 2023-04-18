import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RecipeBgHero } from 'components/RecipePageHero/RecipePageHero.styled';
import RecipeHeroContent from './RecipeHeroContent/RecipeHeroContent';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';

import {
  getRecipeById,
  getUserShoppingList,
} from 'redux/userRecipes/userRecipesOperations';
import { selectRecipe } from 'redux/userRecipes/userRecipesSelectors';

const mainRoot = document.querySelector('#racipe_bg');

const RecipeBg = () => {
  return createPortal(<RecipeBgHero></RecipeBgHero>, mainRoot);
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
      <RecipeBg />
      <RecipeHeroContent
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

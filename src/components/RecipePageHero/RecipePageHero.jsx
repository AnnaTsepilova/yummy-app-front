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
  // const { title, description, time } = useSelector(selectRecipe);
  // console.log(recipe);

  useEffect(() => {
    dispatch(getUserShoppingList());
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  return (
    <>
      <RecipeBckg>
        {recipe?.length > 0 && recipe.map(item => <div>{item.title}</div>)}
        {/* {recipe?.length > 0 &&
          recipe.map(item => (
            <RecipeHeroTextAdd
              title={item.title}
              description={item.description}
              time={item.time}
              id={item.id}
            />
          ))} */}
        {/* <RecipeHeroTextAdd
          title={title}
          description={description}
          time={time}
          id={id}
        /> */}
      </RecipeBckg>
      <RecipeInngredientsList />
      <RecipePreparation />
    </>
  );
};

export default RecipePageHero;

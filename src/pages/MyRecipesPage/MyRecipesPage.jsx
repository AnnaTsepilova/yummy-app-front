import React, { useEffect } from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import Header from 'components/Header/Header';
import PageHeader from 'components/PageHeader/PageHeader';
import { selectMyRecipes } from 'redux/userRecipes/userRecipesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMyRecipe,
  removeMyRecipe,
} from 'redux/userRecipes/userResipesOperations';
import NotFoundImg from 'images/Search/not-found-img.png';

const MyRecipesPage = () => {
  const recipes = useSelector(selectMyRecipes);
  console.log(recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipe());
  }, [dispatch]);

  return (
    <>
      <Header />
      <PageHeader>My recipes</PageHeader>
      {recipes.length > 0 ? (
        <MyRecipesList items={recipes} removeFnc={removeMyRecipe} />
      ) : (
        <img src={NotFoundImg} alt="Not found" />
      )}
    </>
  );
};

export default MyRecipesPage;

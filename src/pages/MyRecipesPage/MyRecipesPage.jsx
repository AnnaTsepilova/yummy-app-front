import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';

import {
  selectMyRecipes,
  selectIsLoading,
  selectUserError,
} from 'redux/userRecipes/userRecipesSelectors';
import {
  getMyRecipe,
  removeMyRecipe,
} from 'redux/userRecipes/userResipesOperations';

const MyRecipesPage = () => {
  const recipes = useSelector(selectMyRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectUserError);

  console.log(error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipe());
  }, [dispatch]);

  return (
    <>
      <MainTitle title="My recipes" />
      {isLoading ? (
        <Loader />
      ) : (
        <MyRecipesList items={recipes} removeFnc={removeMyRecipe} />
      )}
    </>
  );
};

export default MyRecipesPage;

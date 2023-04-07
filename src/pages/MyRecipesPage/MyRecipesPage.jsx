import React, { useEffect } from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import {
  selectMyRecipes,
  selectIsLoading,
  selectUserError,
} from 'redux/userRecipes/userRecipesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMyRecipe,
  removeMyRecipe,
} from 'redux/userRecipes/userResipesOperations';
import Loader from 'components/Loader/Loader';

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

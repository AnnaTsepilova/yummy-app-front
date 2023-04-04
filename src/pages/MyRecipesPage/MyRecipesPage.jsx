import React, { useEffect } from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import Header from 'components/Header/Header';
import PageHeader from 'components/PageHeader/PageHeader';
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
import NotFound from 'components/NotFound/NotFound';

const MyRecipesPage = () => {
  const recipes = useSelector(selectMyRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectUserError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipe());
  }, [dispatch]);

  return (
    <>
      <Header />
      <PageHeader>My recipes</PageHeader>
      {isLoading ? (
        <Loader />
      ) : (
        <MyRecipesList items={recipes} removeFnc={removeMyRecipe} />
      )}
      {error && <NotFound />}
    </>
  );
};

export default MyRecipesPage;

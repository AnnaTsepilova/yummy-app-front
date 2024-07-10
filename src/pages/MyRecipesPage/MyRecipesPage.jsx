import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import { MuiPag } from 'components/MuiPagination/MuiPag';

import {
  selectMyRecipes,
  selectIsLoading,
  selectTotalMyRecipes,
} from 'redux/userRecipes/userRecipesSelectors';
import {
  getMyRecipe,
  removeMyRecipe,
} from 'redux/userRecipes/userRecipesOperations';

const MyRecipesPage = () => {
  const recipes = useSelector(selectMyRecipes);
  const isLoading = useSelector(selectIsLoading);
  const totalMyRecipes = useSelector(selectTotalMyRecipes);
  const [page, setPage] = useState(1);
  const perPage = 4;
  const count = Math.ceil(totalMyRecipes / perPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipe(page));
  }, [dispatch, page]);

  const handleChange = (_, value) => {
    setPage(value);
  };

  return (
    <>
      <MainTitle title="My recipes" />
      {isLoading ? (
        <Loader />
      ) : (
        <MyRecipesList items={recipes} change={setPage} page={page} removeFnc={removeMyRecipe} />
      )}

      {count > 1 && (
        <MuiPag count={count} page={page} handleChange={handleChange} />
      )}
    </>
  );
};

export default MyRecipesPage;

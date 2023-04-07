import React, { useEffect } from 'react';

import Loader from 'components/Loader/Loader';
import MainTitle from 'components/MainTitle/MainTitle';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';

import { useDispatch, useSelector } from 'react-redux';
import {
  removeRecipeFromFavorite,
  getFavoriteRecipes,
} from 'redux/userRecipes/userResipesOperations';
import {
  selectFavoriteRecipes,
  selectIsLoading,
  // selectUserError,
} from 'redux/userRecipes/userRecipesSelectors';

const FavoritesPage = () => {
  const recipes = useSelector(selectFavoriteRecipes);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectUserError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRecipes());
  }, [dispatch]);

  return (
    <>
      <MainTitle title="Favorites" />
      {isLoading ? (
        <Loader />
      ) : (
        <MyRecipesList
          items={recipes}
          btnStyle={'secondary'}
          removeFnc={removeRecipeFromFavorite}
        />
      )}
    </>
  );
};

export default FavoritesPage;

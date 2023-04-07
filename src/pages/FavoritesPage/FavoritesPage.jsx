import React, { useEffect } from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import PageTitle from 'components/PageTitle/PageTitle';
import {
  removeRecipeFromFavorite,
  getFavoriteRecipes,
} from 'redux/userRecipes/userResipesOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteRecipes,
  selectIsLoading,
  // selectUserError,
} from 'redux/userRecipes/userRecipesSelectors';
import Loader from 'components/Loader/Loader';

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
      <PageTitle>Favorites</PageTitle>
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

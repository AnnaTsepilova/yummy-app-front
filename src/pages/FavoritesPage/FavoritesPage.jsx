import React, { useEffect } from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import Header from 'components/Header/Header';
import PageHeader from 'components/PageHeader/PageHeader';
import {
  removeRecipeFromFavorite,
  getFavoriteRecipes,
} from 'redux/userRecipes/userResipesOperations';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { selectFavoriteRecipes } from 'redux/userRecipes/userRecipesSelectors';

const FavoritesPage = () => {
  const recipes = useSelector(selectFavoriteRecipes);

  const dispatch = useDispatch();

  console.log(recipes);

  useEffect(() => {
    dispatch(getFavoriteRecipes());
  }, [dispatch]);

  return (
    <>
      <Header />
      <PageHeader>Favorites</PageHeader>
      <MyRecipesList
        items={recipes}
        btnStyle={'secondary'}
        removeFnc={removeRecipeFromFavorite}
      />
    </>
  );
};

export default FavoritesPage;

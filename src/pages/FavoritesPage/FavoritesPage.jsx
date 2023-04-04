import React, { useEffect } from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import Header from 'components/Header/Header';
import PageHeader from 'components/PageHeader/PageHeader';
import {
  removeRecipeFromFavorite,
  getFavoriteRecipes,
} from 'redux/userRecipes/userResipesOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteRecipes } from 'redux/userRecipes/userRecipesSelectors';
import NotFoundImg from 'images/Search/not-found-img.png';

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
      {recipes.length > 0 ? (
        <MyRecipesList
          items={recipes}
          btnStyle={'secondary'}
          removeFnc={removeRecipeFromFavorite}
        />
      ) : (
        <img src={NotFoundImg} alt="Not found" />
      )}
    </>
  );
};

export default FavoritesPage;

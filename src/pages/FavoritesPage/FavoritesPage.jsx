import React, { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import MainTitle from 'components/MainTitle/MainTitle';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import { MuiPag } from 'components/MuiPagination/MuiPag';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeRecipeFromFavorite,
  getFavoriteRecipes,
} from 'redux/userRecipes/userRecipesOperations';
import {
  selectFavoriteRecipes,
  selectIsLoading,
  selectTotalFavorite,
} from 'redux/userRecipes/userRecipesSelectors';

const FavoritesPage = () => {
  const recipes = useSelector(selectFavoriteRecipes);
  const isLoading = useSelector(selectIsLoading);
  const totalFavorite = useSelector(selectTotalFavorite);
  const [page, setPage] = useState(1);
  const perPage = 4;
  const count = Math.ceil(totalFavorite / perPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteRecipes(page));
  }, [dispatch, page]);
  const handleChange = (_, value) => {
    setPage(value);
  };

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
          change={setPage}
          page={page}
        />
      )}

      {count > 1 && (
        <MuiPag count={count} page={page} handleChange={handleChange} />
      )}
    </>
  );
};

export default FavoritesPage;

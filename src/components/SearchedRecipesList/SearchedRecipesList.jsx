import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import Loader from 'components/Loader/Loader';
//import { SearchNotFound } from './SearchNotFound';
import NotFound from 'components/NotFound/NotFound';

import SearchBar from 'components/SearchBar/SearchBar';
import { RecipeCard } from 'components/Main/PreviewCategories/RecipeCard';
import { MuiPag } from 'components/MuiPagination/MuiPag';
import { Table } from 'pages/CategoriesCard/CategoriesCard.styled';

import {
  getRecipesByQuery,
  getRecipesByIngredient,
} from 'redux/commonRecipes/commonOperations';
import {
  getError,
  getRecipesBySearchQuery,
} from 'redux/commonRecipes/commonSelectors';

export const useMediaRules = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return { isMobile, isDesktop, isTablet };
};

const SearchedRecipesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const query = searchParams.get('query') ?? '';
  const type = searchParams.get('type') ?? '';
  const [request, setRequest] = useState(false);
  const recipesBySearchQuery = useSelector(getRecipesBySearchQuery);
  const errorSearch = useSelector(getError);
  const isPending = useSelector(state => state.outerRecipes.isCategoryFetching);

  const totalQuery = recipesBySearchQuery.totalHits;
  const { isTablet, isDesktop } = useMediaRules();
  const [page, setPage] = useState(1);

  let perPage;
  if (isDesktop) {
    perPage = 12;
  } else if (isTablet) {
    perPage = 6;
  } else {
    perPage = 6;
  }

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleOnSubmit = (query1, type1) => {
    if (query1 === '') {
      Notiflix.Notify.warning(`You didn't enter anything to search`);
      return;
    }
    setSearchParams(
      new URLSearchParams({
        query: query1,
        type: type1,
      })
    );
    setPage(1);
  };

  useEffect(() => {
    if (query === '' || type === '') return;

    if (type === 'title') {
      dispatch(getRecipesByQuery({ query, page, per_page: perPage }));
      setRequest(true);
    } else {
      dispatch(
        getRecipesByIngredient({ ingredient: query, page, per_page: perPage })
      );
      setRequest(true);
    }
  }, [dispatch, type, query, page, perPage]);

  return (
    <>
      <SearchBar
        handleOnSubmit={handleOnSubmit}
        startType={type}
        startQuery={query}
      />
      {isPending ? (
        <Loader />
      ) : (
        <Table>
          {console.log(recipesBySearchQuery)}
          {recipesBySearchQuery?.results?.map(result => (
            <RecipeCard
              key={result._id}
              id={result._id}
              image={result.preview}
              text={result.title}
            />
          ))}
        </Table>
      )}
      {totalQuery > 0 && (
        <MuiPag
          count={Math.ceil(totalQuery / perPage)}
          page={page}
          handleChange={handleChange}
        />
      )}
      {!request && (
        <NotFound text={`You haven't searched for anything yet...`} />
      )}
      {errorSearch && <NotFound text={'Try looking for something else...'} />}
    </>
  );
};

export default SearchedRecipesList;

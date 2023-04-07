import SearchBar from 'components/SearchBar/SearchBar';
import { RecipeCard } from 'components/Main/PreviewCategories/RecipeCard';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { SearchNotFound } from './SearchNotFound';
import Notiflix from 'notiflix';
import { getRecipesByQuery } from 'redux/commonRecipes/commonOperations';
import { getRecipesByIngredient } from 'redux/searchByIngredients/ingredientsOperations';
import {
  getError,
  getRecipesBySearchQuery,
} from 'redux/commonRecipes/commonSelectors';

const SearchedRecipesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const query = searchParams.get('query') ?? '';
  const type = searchParams.get('type') ?? '';
  const [request, setRequest] = useState(false);
  // const [page, setPage] = useState(1);
  // const { isTablet, isDesktop } = useMediaRules();
  const recipesBySearchQuery = useSelector(getRecipesBySearchQuery);
  const errorSearch = useSelector(getError);
  // const totalQuery = recipesBySearchQuery.totalHits;
  const isPending = useSelector(state => state.outerRecipes.isCategoryFetching);

  // const isTab = useMediaQuery({ minWidth: 768 });
  // const isDesc = useMediaQuery({ minWidth: 1440 });

  // let perPage;
  // if (isDesc) {
  //   perPage = 12;
  // } else if (isTab) {
  //   perPage = 6;
  // } else {
  //   perPage = 6;
  // }

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
    // setPage(1);
  };

  useEffect(() => {
    if (query === '' || type === '') return;

    if (type === 'title') {
      dispatch(getRecipesByQuery({ query }));
      setRequest(true);
    } else {
      dispatch(getRecipesByIngredient({ ingredientTtl: query }));
      setRequest(true);
    }
  }, [dispatch, type, query]);

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
        <ul>
          {recipesBySearchQuery?.data?.map(el => (
            <RecipeCard card={el} key={el.id} />
          ))}
        </ul>
      )}
      {/* {totalQuery > 0 && (
        <PaginationComp
          count={Math.ceil(totalQuery / perPage)}
          page={page}
          handleChange={handleChange}
        />
      )} */}
      {!request && (
        <SearchNotFound text={`You haven't searched for anything yet...`} />
      )}
      {errorSearch && (
        <SearchNotFound text={'Try looking for something else...'} />
      )}
    </>
  );
};

export default SearchedRecipesList;

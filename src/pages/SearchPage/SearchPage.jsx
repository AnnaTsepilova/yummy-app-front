import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Title } from 'pages/SearchPage/SearchPage.styled';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import Loader from 'components/Loader/Loader';

const SearchPage = () => {
  return (
    <>
      <Title>Search</Title>
      <SearchedRecipesList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SearchPage;

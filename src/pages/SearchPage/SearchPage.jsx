import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TitleBox, Title } from '../CategoriesPage/CategoriesPage.styled';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import Loader from 'components/Loader/Loader';

const SearchPage = () => {
  return (
    <>
      <TitleBox>
        <Title>Search</Title>
      </TitleBox>
      <SearchedRecipesList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SearchPage;

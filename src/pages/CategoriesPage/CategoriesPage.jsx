import { Suspense } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CategoryList } from 'components/CategoryList/CategoryList';
import Loader from 'components/Loader/Loader';
import { TitleBox, Title } from './CategoriesPage.styled';

const CategoriesPage = () => {
  return (
    <>
      <TitleBox>
        <Title>Categories</Title>
      </TitleBox>
      <CategoryList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CategoriesPage;

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CategoryList } from 'components/CategoryList/CategoryList';
import Loader from 'components/Loader/Loader';
import { Title } from 'pages/CategoriesPage/CategoriesPage.styled';

const CategoriesPage = () => {
  return (
    <>
      <Title>Categories</Title>
      <CategoryList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CategoriesPage;

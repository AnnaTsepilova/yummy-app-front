import { Suspense } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CategoryList } from 'components/CategoryList/CategoryList';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const CategoriesPage = () => {
  return (
    <div>
      <Container>
        <p>Categories</p>
        <CategoryList />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default CategoriesPage;

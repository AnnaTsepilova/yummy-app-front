import { Suspense } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CategoryList } from 'components/CategoryList/CategoryList';

const CategoriesPage = () => {
  return (
    <div>
      {/* <Container> */}
      <p>Categories</p>
      <CategoryList />
      <Suspense
      // fallback={<Loader />}
      >
        <Outlet />
      </Suspense>
      {/* </Container> */}
    </div>
  );
};

export default CategoriesPage;

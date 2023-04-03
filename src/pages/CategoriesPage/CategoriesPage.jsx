import { Suspense } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CategoryList } from 'components/CategoryList/CategoryList';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import { TitleBox, Title } from './CategoriesPage.styled';

const CategoriesPage = () => {
  return (
    <div>
      <Container>
        <TitleBox>
          <Title>Categories</Title>
        </TitleBox>
        <CategoryList />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default CategoriesPage;

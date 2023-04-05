import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Container,
  FooterBgLeaves,
} from 'components/SharedLayout/SharedLayout.styled';

import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <FooterBgLeaves />
      <Footer />
    </>
  );
};

export default SharedLayout;

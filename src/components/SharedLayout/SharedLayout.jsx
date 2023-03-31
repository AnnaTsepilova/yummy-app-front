import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from 'components/SharedLayout/SharedLayout.styled';
import Loader from 'components/Loader/Loader';

// import { Header } from 'components/Header/Header';
// import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <Container>
      {/* <Header /> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </Container>
  );
};

export default SharedLayout;

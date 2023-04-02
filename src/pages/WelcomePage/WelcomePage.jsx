import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

import Loader from 'components/Loader/Loader';
import WelcomeBg from 'components/WelcomeBg/WelcomeBg';
import { PublicPageContainer } from 'pages/WelcomePage/WelcomePage.styled';

const WelcomePage = () => {
  return (
    <>
      <WelcomeBg>
        <PublicPageContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </PublicPageContainer>
      </WelcomeBg>
    </>
  );
};

export default WelcomePage;

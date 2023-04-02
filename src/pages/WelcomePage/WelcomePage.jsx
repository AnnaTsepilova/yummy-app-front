import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

import Loader from 'components/Loader/Loader';
import WelcomeContent from 'components/WelcomeContent/WelcomeContent';
import {
  PublicPageContainer,
  WelcomeTitle,
} from 'pages/WelcomePage/WelcomePage.styled';

const WelcomePage = () => {
  return (
    <>
      <WelcomeContent>
        <PublicPageContainer>
          <WelcomeTitle>Welcome to the app!</WelcomeTitle>
          {/* <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense> */}
        </PublicPageContainer>
      </WelcomeContent>
    </>
  );
};

export default WelcomePage;

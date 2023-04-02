import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

import Loader from 'components/Loader/Loader';
import WelcomeContent from 'components/WelcomeContent/WelcomeContent';

const WelcomePage = () => {
  return (
    <>
      <WelcomeContent>
        {/* <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense> */}
      </WelcomeContent>
    </>
  );
};

export default WelcomePage;

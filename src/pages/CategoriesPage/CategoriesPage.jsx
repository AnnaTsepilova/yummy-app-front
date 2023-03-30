import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const CategoriesPage = () => {
  return (
    <div>
      {/* <Container> */}
      <p>Categories</p>
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

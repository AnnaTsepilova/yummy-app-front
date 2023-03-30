import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

// const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
// const NotFound = lazy(() => import('./NotFound/NotFound'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path="/register" element={<RegisterForm />} />
        <Route path="/signin" element={<RegisterForm />} /> */}
        {/* <Route path="/" element={<NotFound />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<CategoriesPage />} />
      </Routes>
    </Suspense>
  );
};

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
// const HomePage = lazy(() => import('./../pages/HomePage/HomePage'));
// const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path="/register" element={<RegisterForm />} />
        <Route path="/signin" element={<RegisterForm />} /> */}
        {/* <Route path="/main" element={<HomePage />} /> */}
        <Route path="/" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

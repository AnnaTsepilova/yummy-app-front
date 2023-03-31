import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
<<<<<<< HEAD

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import PublicRoute from 'components/PublicRoute/PublicRoute';

=======
// const HomePage = lazy(() => import('./../pages/HomePage/HomePage'));
>>>>>>> 14ba3955dca17579dddb7258e82ceaa53a87482d
// const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

const AddRecipePage = lazy(() => import('pagesAddRecipePage/AddRecipePage'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    // <BrowserRouter basename="yummy-app-front">
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/register" element={<RegisterForm />} />
        <Route path="/signin" element={<RegisterForm />} /> */}
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/" element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<SharedLayout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';

import * as authOperations from 'redux/auth/authOperations';

import {
  selectToken,
  // selectIsFetchingCurrentUser,
} from 'redux/auth/authSelectors';
import { setAccessToken } from 'redux/auth/authSlice';

import Loader from 'components/Loader/Loader';

import SharedLayout from 'components/SharedLayout/SharedLayout';

import PublicRoute from 'routes/PublicRoute/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage/AuthPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const CategoriesCard = lazy(() =>
  import('pages/CategoriesCard/CategoriesCard')
);
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);
  const location = window.location;

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }
  //   // console.log(token);

  //   dispatch(authOperations.refreshToken());
  //   // dispatch(authOperations.getAllUserInfo());
  // }, [dispatch]);

  useEffect(() => {
    console.log('App', accessToken);
    console.log('App', location.pathname);
    if (accessToken) {
      authOperations.setAuthHeader(accessToken);
      dispatch(setAccessToken(accessToken));
      // dispatch(authOperations.getAllUserInfo());
      if (
        location.pathname === '/yummy-app-front/signin' ||
        location.pathname === '/yummy-app-front/register'
      ) {
        location.pathname = '/yummy-app-front/main';
        // dispatch(authOperations.getAllUserInfo());
      }
    }
  }, [accessToken, dispatch, location]);

  // TODO убрать /yummy-app-front/ из location.pathname и перед деплоем на Netlify

  return (
    <BrowserRouter basename="/yummy-app-front">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/signin" element={<AuthPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<SharedLayout />}>
              <Route path="/main" element={<MainPage />} />
              <Route path="/categories" element={<CategoriesPage />}>
                <Route
                  path="/categories:categoryName"
                  element={<CategoriesCard />}
                />
              </Route>
              <Route path="/recipe/:recipeId" element={<RecipePage />} />
              <Route path="/add " element={<AddRecipePage />} />
              <Route path="/my" element={<MyRecipesPage />} />
              <Route path="/favorite" element={<FavoritesPage />} />
              <Route path="/shopping-list" element={<ShoppingListPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

import SharedLayout from 'components/SharedLayout/SharedLayout';
// import CategoriesCard from 'pages/CategoriesCard/CategoriesCard';
// import PublicRoute from 'routes/PublicRoute/PublicRoute';
// import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const CategoriesCard = lazy(() =>
  import('pages/CategoriesCard/CategoriesCard')
);

export const App = () => {
  return (
    <BrowserRouter basename="/yummy-app-front">
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/register" element={<RegisterForm />} />
        <Route path="/signin" element={<RegisterForm />} /> */}

          {/* <Route path="/" element={<PublicRoute />}> */}
          {/* <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SignInPage />} /> */}
          {/* </Route> */}
          {/* <Route path="/" element={<PrivateRoute />}> */}
          {/* <Route path="/" element={<SharedLayout />}> */}
          <Route path="/categories" element={<CategoriesPage />}>
            <Route path=":categoryName" element={<CategoriesCard />} />
          </Route>
          {/* <Route path="/add " element={<AddRecipePage />} />
            <Route path="/my" element={<MyRecipesPage />} />
            <Route path="/favorite" element={<FavoritesPage />} />
            <Route path="/shopping-list" element={<ShoppingListPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route> */}
          {/* </Route> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

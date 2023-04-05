import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import authSlice from 'redux/auth/authSlice';
import commonRecipesSlice from 'redux/commonRecipes/commonRecipesSlice';
import userRecipesSlice from 'redux/userRecipes/userRecipesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'userEmail', 'isLoggedIn', 'sid', 'refreshToken'],
};

const userRecipesPersistConfig = {
  key: 'userRecipes',
  storage,
  whitelist: ['myRecipes', 'favorite'],
};

const commonRecipesPersistConfig = {
  key: 'commonRecipes',
  storage,
  whitelist: ['categoryList'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

const persistedCommonRecipesReducer = persistReducer(
  commonRecipesPersistConfig,
  commonRecipesSlice
);

const persistedUserRecipesReduser = persistReducer(
  userRecipesPersistConfig,
  userRecipesSlice
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    outerRecipes: persistedCommonRecipesReducer,
    userRecipes: persistedUserRecipesReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

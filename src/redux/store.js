import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import commonRecipesSlice from './commonRecipes/commonRecipesSlice';
import userRecipesSlice from './userRecipes/userRecipesSlice';

const userRecipesPersistConfig = {
  key: 'userRecipes',
  storage,
};

const commonRecipesPersistConfig = {
  key: 'commonRecipes',
  storage,
  whitelist: ['categoryList'],
};

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
    outerRecipes: persistedCommonRecipesReducer,
    userRecipes: persistedUserRecipesReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

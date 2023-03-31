import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import commonRecipesSlice from './commonRecipes/commonRecipesSlice';

const commonRecipesPersistConfig = {
  key: 'commonRecipes',
  storage,
  whitelist: ['categoryList'],
};

const persistedCommonRecipesReducer = persistReducer(
  commonRecipesPersistConfig,
  commonRecipesSlice
);

export const store = configureStore({
  reducer: {
    outerRecipes: persistedCommonRecipesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

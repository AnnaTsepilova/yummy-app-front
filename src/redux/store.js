import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commonRecipesSlice from './commonRecipes/commonRecipesSlice';
import userRecipesSlice from './userRecipes/userRecipesSlice';
import authSlice from './auth/authSlice';

const userRecipesPersistConfig = {
  key: 'userRecipes',
  storage,
};

const commonRecipesPersistConfig = {
  key: 'commonRecipes',
  storage,
  whitelist: ['categoryList'],
};

// const persistedAuthReducer = persistReducer(
//   {
//     key: 'auth',
//     storage,
//   },
//   authSlice.reducer
// );

const persistedCommonRecipesReducer = persistReducer(
  commonRecipesPersistConfig,
  commonRecipesSlice
);

const persistedUserRecipesReducer = persistReducer(
  userRecipesPersistConfig,
  userRecipesSlice
);



export const store = configureStore({
  reducer: {
    outerRecipes: persistedCommonRecipesReducer,
    userRecipes: persistedUserRecipesReducer,
    // auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

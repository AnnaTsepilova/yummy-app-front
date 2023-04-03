import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipeToFavorite,
  getFavoriteRecipes,
  removeRecipeFromFavorite,
} from './userResipesOperations';

const initialState = {
  usersResipes: [],
  favorite: [],
};

const userResipesSlice = createSlice({
  name: 'userResipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addRecipeToFavorite.fulfilled, (state, { payload }) => {
        state.favorite = payload;
      })
      .addCase(removeRecipeFromFavorite.fulfilled, (state, { payload }) => {
        const index = state.favorite.findIndex(item => item.id === payload);
        state.favorite.splice(index, 1);
      })
      .addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.favorite = payload;
      }),
});

export default userResipesSlice.reducer;

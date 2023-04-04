import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipeToFavorite,
  getFavoriteRecipes,
  getMyRecipe,
  removeMyRecipe,
  removeRecipeFromFavorite,
} from './userResipesOperations';

const initialState = {
  myRecipes: [],
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
      })
      .addCase(getMyRecipe.fulfilled, (state, { payload }) => {
        state.myRecipes = payload;
      })
      .addCase(removeMyRecipe.fulfilled, (state, { payload }) => {
        const index = state.myRecipes.findIndex(item => item.id === payload);
        state.myRecipes.splice(index, 1);
      }),
});

export default userResipesSlice.reducer;

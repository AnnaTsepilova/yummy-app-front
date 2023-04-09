import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipeToFavorite,
  getFavoriteRecipes,
  getMyRecipe,
  removeMyRecipe,
  removeRecipeFromFavorite,
  getUserShoppingList,
  addUserShoppingList,
  removeFromShoppingList,
  getRecipeById,
} from './userResipesOperations';

const pending = state => {
  state.isLoading = true;
};

const rejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const initialState = {
  myRecipes: [],
  shoppingList: [],
  favorite: [],
  isLoading: false,
  error: null,
  recipeById: [],
};

const userResipesSlice = createSlice({
  name: 'userResipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addRecipeToFavorite.pending, pending)
      .addCase(addRecipeToFavorite.fulfilled, (state, { payload }) => {
        state.favorite = payload;
      })
      .addCase(addRecipeToFavorite.rejected, rejected)
      .addCase(removeRecipeFromFavorite.pending, pending)
      .addCase(removeRecipeFromFavorite.fulfilled, (state, { payload }) => {
        const index = state.favorite.findIndex(item => item.id === payload);
        state.favorite.splice(index, 1);
      })
      .addCase(removeRecipeFromFavorite.rejected, rejected)
      .addCase(getFavoriteRecipes.pending, pending)
      .addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorite = payload.results;
      })
      .addCase(getFavoriteRecipes.rejected, rejected)
      .addCase(getMyRecipe.pending, pending)
      .addCase(getMyRecipe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.myRecipes = payload.results;
      })
      .addCase(getMyRecipe.rejected, rejected)
      .addCase(removeMyRecipe.pending, pending)
      .addCase(removeMyRecipe.fulfilled, (state, { payload }) => {
        const index = state.myRecipes.findIndex(item => item.id === payload);
        state.myRecipes.splice(index, 1);
      })
      .addCase(removeMyRecipe.rejected, rejected)
      .addCase(getUserShoppingList.pending, pending)
      .addCase(getUserShoppingList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList = payload.shoppingList;
        // console.log('payload', payload.shoppingList);
      })
      .addCase(getUserShoppingList.rejected, rejected)
      .addCase(addUserShoppingList.pending, pending)
      .addCase(addUserShoppingList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // state.shoppingList = payload.shoppingList;
        // console.log('payload', payload.shoppingList);
      })
      .addCase(addUserShoppingList.rejected, rejected)
      .addCase(removeFromShoppingList.pending, pending)
      .addCase(removeFromShoppingList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // console.log('payload', payload.shoppingList);
      })
      .addCase(removeFromShoppingList.rejected, rejected)
      .addCase(getRecipeById.pending, (state, { payload }) => {
        state.recipeById = [];
        state.isLoading = true;
      })
      .addCase(getRecipeById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.recipeById = payload;
        // console.log(state.recipeById);
      })
      .addCase(getRecipeById.rejected, rejected),
});

export default userResipesSlice.reducer;

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
  totalFavorite: 0,
  totalMyRecipes: 0,
  isLoading: false,
  isLoadBtn: false,
  error: null,
  recipeById: [],
};

const userResipesSlice = createSlice({
  name: 'userResipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addRecipeToFavorite.pending, state => {
        state.isLoadBtn = true;
      })
      .addCase(addRecipeToFavorite.fulfilled, (state, { payload }) => {
        state.isLoadBtn = false;
        // state.favorite = payload;
      })
      .addCase(addRecipeToFavorite.rejected, rejected)
      .addCase(removeRecipeFromFavorite.pending, state => {
        state.isLoadBtn = true;
      })
      .addCase(removeRecipeFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoadBtn = false;
        const index = state.favorite.findIndex(item => item.id === payload);
        state.favorite.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(removeRecipeFromFavorite.rejected, rejected)
      .addCase(getFavoriteRecipes.pending, state => {
        state.isLoadBtn = true;
      })
      .addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.isLoadBtn = false;
        state.error = null;
        state.favorite = payload.results;
        state.totalFavorite = payload.totalHits;
      })
      .addCase(getFavoriteRecipes.rejected, rejected)
      .addCase(getMyRecipe.pending, pending)
      .addCase(getMyRecipe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.myRecipes = payload.results;
        state.totalMyRecipes = payload.totalHits;
      })
      .addCase(getMyRecipe.rejected, rejected)
      .addCase(removeMyRecipe.fulfilled, (state, { payload }) => {
        const index = state.myRecipes.findIndex(item => item.id === payload);
        state.myRecipes.splice(index, 1);
        state.isLoading = false;
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
      .addCase(addUserShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(addUserShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.shoppingList.shopingList;
        state.isLoading = false;
        state.error = null;
        // state.shoppingList = payload.shoppingList;
        // console.log('payload', payload.shoppingList);
      })
      .addCase(addUserShoppingList.rejected, rejected)
      .addCase(removeFromShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeFromShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.shopingList;
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

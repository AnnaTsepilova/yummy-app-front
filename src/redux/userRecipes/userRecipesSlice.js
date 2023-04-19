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
} from 'redux/userRecipes/userRecipesOperations';

import { logOut } from 'redux/auth/authOperations';

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

const userRecipesSlice = createSlice({
  name: 'userRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addRecipeToFavorite.pending, state => {
        state.isLoadBtn = true;
      })
      .addCase(addRecipeToFavorite.fulfilled, (state, { payload }) => {
        state.isLoadBtn = false;
        state.favorite.push(payload);
      })
      .addCase(addRecipeToFavorite.rejected, rejected)
      .addCase(removeRecipeFromFavorite.pending, state => {
        state.isLoadBtn = true;
      })
      .addCase(removeRecipeFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoadBtn = false;
        const index = state.favorite.findIndex(item => item._id === payload);
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
        const index = state.myRecipes.findIndex(item => item._id === payload);
        state.myRecipes.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(removeMyRecipe.rejected, rejected)
      .addCase(getUserShoppingList.pending, pending)
      .addCase(getUserShoppingList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList = payload.shoppingList;
      })
      .addCase(getUserShoppingList.rejected, rejected)
      .addCase(addUserShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(addUserShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.shoppingList;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addUserShoppingList.rejected, rejected)
      .addCase(removeFromShoppingList.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeFromShoppingList.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.shoppingList = payload.shoppingList;
        state.isLoading = false;
        state.error = null;
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
      })
      .addCase(getRecipeById.rejected, rejected)

      .addCase(logOut.pending, pending)
      .addCase(logOut.fulfilled, (state, action) => {
        state.myRecipes = [];
        state.shoppingList = [];
        state.favorite = [];
        state.totalFavorite = 0;
        state.totalMyRecipes = 0;
        state.recipeById = [];
      })
      .addCase(logOut.rejected, rejected)

      .addMatcher(
        action => action.type.endsWith(`/rejected`),
        (_state, { payload }) => {
          if (payload.code === 401) {
            return initialState;
          }
        }
      ),
});

export default userRecipesSlice.reducer;

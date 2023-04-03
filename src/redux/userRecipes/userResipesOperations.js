import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addRecipeTofavoriteAPI,
  getFavoriteRecipesAPI,
  removeRecipeFromFavoriteAPI,
} from 'service/API/dishesApi';

export const addRecipeToFavorite = createAsyncThunk(
  'userResipes/addToFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const data = await addRecipeTofavoriteAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeRecipeFromFavorite = createAsyncThunk(
  'userRecipes/removeFromFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeRecipeFromFavoriteAPI(id);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getFavoriteRecipes = createAsyncThunk(
  'userRecipes/getFavoriteRecipes',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getFavoriteRecipesAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

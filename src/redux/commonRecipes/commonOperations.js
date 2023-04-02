import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getCategoryListAPI,
  getLimitedRecipesByCategoryAPI,
} from 'service/API/dishesApi';

export const getCategoryList = createAsyncThunk(
  'commonRecipes/categoryList',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCategoryListAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getLimitedRecipesByCategory = createAsyncThunk(
  'outerRecipes/limitedRecipes',
  async (params, { rejectWithValue }) => {
    try {
      const { category, limit } = params;
      const data = await getLimitedRecipesByCategoryAPI(category, limit);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

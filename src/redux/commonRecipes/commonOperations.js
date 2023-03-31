import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCategoryListAPI } from 'service/API/dishesApi';

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

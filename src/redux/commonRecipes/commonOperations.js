import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  // getCategoryListAPI,
  getLimitedRecipesByCategoryAPI,
  getAllRecipesByCategoryAPI,
  getRecipesByQueryAPI,
} from 'service/API/dishesApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getCategoryList = createAsyncThunk(
  'commonRecipes/categoryList',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get('/recipes/category-list');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// export const getCategoryList = createAsyncThunk(
//   'commonRecipes/categoryList',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getCategoryListAPI();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.status);
//     }
//   }
// );

export const getMainPage = createAsyncThunk(
  'commonRecipes/mainPage',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get('/recipes/main-page');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
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

export const getAllRecipesByCategory = createAsyncThunk(
  'outerRecipes/allRecipes',
  async (category, { rejectWithValue }) => {
    try {
      const data = await getAllRecipesByCategoryAPI(category);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByQuery = createAsyncThunk(
  'outerRecipes/recipesByQuery',
  async (params, { rejectWithValue }) => {
    try {
      const { query, page, per_page } = params;
      const data = await getRecipesByQueryAPI(query, page, per_page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

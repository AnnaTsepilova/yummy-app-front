import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  // getCategoryListAPI,
  getLimitedRecipesByCategoryAPI,
  getAllRecipesByCategoryAPI,
  getRecipesByQueryAPI,
  getRecipesByIngredientAPI,
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
    setToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ4YTE2NjU2NTMxYzYzZDdiOTc2NyIsInNpZCI6IjY0MmQ5YzIyZDA2NTA1NzhkYjEzZTNiMyIsImlhdCI6MTY4MDcxMDY5MCwiZXhwIjoxNjgwNzE0MjkwfQ.n0ZTeHXnHHTCXJJebTbX_oSs8oq2CCrLdgdADj_MRqs'
    );
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
    setToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ4YTE2NjU2NTMxYzYzZDdiOTc2NyIsInNpZCI6IjY0MmQ5YzIyZDA2NTA1NzhkYjEzZTNiMyIsImlhdCI6MTY4MDcxMDY5MCwiZXhwIjoxNjgwNzE0MjkwfQ.n0ZTeHXnHHTCXJJebTbX_oSs8oq2CCrLdgdADj_MRqs'
    );
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
    setToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ4YTE2NjU2NTMxYzYzZDdiOTc2NyIsInNpZCI6IjY0MmQ5YzIyZDA2NTA1NzhkYjEzZTNiMyIsImlhdCI6MTY4MDcxMDY5MCwiZXhwIjoxNjgwNzE0MjkwfQ.n0ZTeHXnHHTCXJJebTbX_oSs8oq2CCrLdgdADj_MRqs'
    );
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
    setToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ4YTE2NjU2NTMxYzYzZDdiOTc2NyIsInNpZCI6IjY0MmQ5YzIyZDA2NTA1NzhkYjEzZTNiMyIsImlhdCI6MTY4MDcxMDY5MCwiZXhwIjoxNjgwNzE0MjkwfQ.n0ZTeHXnHHTCXJJebTbX_oSs8oq2CCrLdgdADj_MRqs'
    );
    try {
      const { query } = params;
      const data = await getRecipesByQueryAPI({ value: query, flags: '' });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// export const getRecipesByQuery = createAsyncThunk(
//   'outerRecipes/recipesByQuery',
//   async (params, { rejectWithValue }) => {
//     setToken(
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ4YTE2NjU2NTMxYzYzZDdiOTc2NyIsInNpZCI6IjY0MmQ4YTJjNjU2NTMxYzYzZDdiOTc2YSIsImlhdCI6MTY4MDcwNjA5MiwiZXhwIjoxNjgwNzA5NjkyfQ.IxuBF3Pm_Q-IZv9g6EdYplkNFvIYgasXbgT-zDi2Zkc'
//     );
//     try {
//       const { query } = params;
//       const data = await getRecipesByQueryAPI(query);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.status);
//     }
//   }
// );

// export const getRecipesByIngredient = createAsyncThunk(
//   'ingredients/recipes',
//   async (params, { rejectWithValue }) => {
//     try {
//       const { ingredient } = params;
//       const data = await getRecipesByIngredientAPI(ingredient);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.status);
//     }
//   }
// );

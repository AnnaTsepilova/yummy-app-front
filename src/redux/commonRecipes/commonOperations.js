import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  getCategoryListAPI,
  getLimitedRecipesByCategoryAPI,
  getAllRecipesByCategoryAPI,
  getRecipesByQueryAPI,
  getRecipesByIngredientAPI,
} from 'service/API/dishesApi';

const setToken = accessToken => {
  if (accessToken) {
    axios.defaults.headers.common.authorization = `Bearer ${accessToken}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

export const getCategoryList = createAsyncThunk(
  'commonRecipes/categoryList',
  async (_, { rejectWithValue }) => {
    setToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ4YTE2NjU2NTMxYzYzZDdiOTc2NyIsInNpZCI6IjY0MmQ5YzIyZDA2NTA1NzhkYjEzZTNiMyIsImlhdCI6MTY4MDcxMDY5MCwiZXhwIjoxNjgwNzE0MjkwfQ.n0ZTeHXnHHTCXJJebTbX_oSs8oq2CCrLdgdADj_MRqs'
    );
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

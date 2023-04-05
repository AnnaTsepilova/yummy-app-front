import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  getCategoryListAPI,
  getLimitedRecipesByCategoryAPI,
  getAllRecipesByCategoryAPI,
  getRecipesByQueryAPI,
  getRecipesByIngredientAPI,
} from 'service/API/dishesApi';

const setToken = token => {
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

export const getCategoryList = createAsyncThunk(
  'commonRecipes/categoryList',
  async (_, { rejectWithValue }) => {
    setToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ1MzJjY2M5M2ExNTRlZWQ3OGQ2NSIsImlhdCI6MTY4MDY5MjAzOCwiZXhwIjoxNjgxMDUyMDM4fQ.WQy4eJg73FBrTJ0b786cxoeWCx9QXS8-pb0il5gXjig'
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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ1MzJjY2M5M2ExNTRlZWQ3OGQ2NSIsImlhdCI6MTY4MDY5MjAzOCwiZXhwIjoxNjgxMDUyMDM4fQ.WQy4eJg73FBrTJ0b786cxoeWCx9QXS8-pb0il5gXjig'
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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ1MzJjY2M5M2ExNTRlZWQ3OGQ2NSIsImlhdCI6MTY4MDY5MjAzOCwiZXhwIjoxNjgxMDUyMDM4fQ.WQy4eJg73FBrTJ0b786cxoeWCx9QXS8-pb0il5gXjig'
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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ1MzJjY2M5M2ExNTRlZWQ3OGQ2NSIsImlhdCI6MTY4MDY5MjAzOCwiZXhwIjoxNjgxMDUyMDM4fQ.WQy4eJg73FBrTJ0b786cxoeWCx9QXS8-pb0il5gXjig'
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
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQ1MzJjY2M5M2ExNTRlZWQ3OGQ2NSIsImlhdCI6MTY4MDY5MjAzOCwiZXhwIjoxNjgxMDUyMDM4fQ.WQy4eJg73FBrTJ0b786cxoeWCx9QXS8-pb0il5gXjig'
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

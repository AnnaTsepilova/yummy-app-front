import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRecipesByIngredientAPI } from 'service/API/dishesApi';

export const getRecipesByIngredient = createAsyncThunk(
  'ingredients/recipes',
  async (params, { rejectWithValue }) => {
    try {
      const { ingredientTtl, page, per_page } = params;
      const data = await getRecipesByIngredientAPI(
        ingredientTtl,
        page,
        per_page
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

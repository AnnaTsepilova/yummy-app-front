import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/authOperations';

import {
  addRecipeTofavoriteAPI,
  addShoppingList,
  deleteShoppingList,
  getFavoriteRecipesAPI,
  getMyRecipeAPI,
  getRecipeByIdAPI,
  getShoppingList,
  removeMyRecipeAPI,
  removeRecipeFromFavoriteAPI,
} from 'service/API/dishesApi';

export const getRecipeById = createAsyncThunk(
  'getRecipeById',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await getRecipeByIdAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getUserShoppingList = createAsyncThunk(
  'shopping-list',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await getShoppingList();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const addUserShoppingList = createAsyncThunk(
  'shopping-list/add',
  async (obj, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await addShoppingList(obj);

      // dispatch(getUserShoppingList());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeFromShoppingList = createAsyncThunk(
  'shopping-list/remove',
  async (obj, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await deleteShoppingList(obj);
      // dispatch(getUserShoppingList());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const addRecipeToFavorite = createAsyncThunk(
  'userRecipes/addToFavorite',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await addRecipeTofavoriteAPI(id);
      await dispatch(getFavoriteRecipes('all'));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeRecipeFromFavorite = createAsyncThunk(
  'userRecipes/removeFromFavorite',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      if (id.page) {
        const data = await removeRecipeFromFavoriteAPI(id.id);
        await dispatch(getFavoriteRecipes(id.page));
        return data.id;
      }
      const data = await removeRecipeFromFavoriteAPI(id);
      await dispatch(getFavoriteRecipes());
      return data.id;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getFavoriteRecipes = createAsyncThunk(
  'userRecipes/getFavoriteRecipes',
  async (page, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      if (page === 'all') {
        const data = await getFavoriteRecipesAPI('all');
        return data;
      }
      const data = await getFavoriteRecipesAPI(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getMyRecipe = createAsyncThunk(
  'userRecipes/getMyRecipes',
  async (page, { rejectWithValue }) => {
    try {
      const data = await getMyRecipeAPI(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeMyRecipe = createAsyncThunk(
  'userRecipes/removeMyRecipes',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await removeMyRecipeAPI(id);
      await dispatch(getMyRecipe());
      return data.id;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

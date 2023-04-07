import { createSlice } from '@reduxjs/toolkit';

const pending = state => {
  state.isIngredientsFetching = true;
};
const rejected = state => {
  state.isIngredientsFetching = false;
};

const initialState = {
  isIngredientsFetching: false,
  ingredients: [],
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder => builder,
});

export default ingredientsSlice.reducer;

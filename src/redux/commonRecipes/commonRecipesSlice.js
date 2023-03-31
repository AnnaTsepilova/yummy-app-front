import { createSlice } from '@reduxjs/toolkit';
import { getCategoryList } from './commonOperations';

const initialState = {
  categoryList: [],
};

export const commmonRecipesSlice = createSlice({
  name: 'commonRecipes',
  initialState,
  extraReducers: builder =>
    builder.addCase(getCategoryList.fulfilled, (state, { payload }) => {
      state.categoryList = payload;
    }),
});

export default commmonRecipesSlice.reducer;

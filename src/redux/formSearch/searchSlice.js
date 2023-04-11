import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults(state, action) {
      state.results = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith(`/rejected`),
      (_state, { payload }) => {
        if (payload === 401) {
          return initialState;
        }
      }
    );
  },
});

export const { setSearchResults } = searchSlice.actions;

export default searchSlice.reducer;

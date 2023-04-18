import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  refreshToken: '',
  error: null,
  isLoading: false,
  searchQuery: '',
  searchType: 'title',
  searchResult: [],
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateSearchQuery.pending, handlePending)
      .addCase(updateSearchQuery.fulfilled, (state, action) => {
        state.searchQuery = action.payload;
      })
      .addCase(updateSearchQuery.rejected, handleRejected)

      .addCase(updateSearchType.pending, handlePending)
      .addCase(updateSearchType.fulfilled, (state, action) => {
        state.searchType = action.payload;
      })
      .addCase(updateSearchType.rejected, handleRejected)

      .addCase(updateSearchResult.pending, handlePending)
      .addCase(updateSearchResult.fulfilled, (state, action) => {
        state.searchResult = action.payload;
      })
      .addCase(updateSearchResult.rejected, handleRejected)

      .addMatcher(
        action => action.type.endsWith(`/rejected`),
        (_state, { payload }) => {
          if (payload === 401) {
            return initialState;
          }
        }
      );
  },
});

export const { updateSearchQuery, updateSearchResult, updateSearchType } =
  searchSlice.actions;
export const searchReducer = searchSlice.reducer;

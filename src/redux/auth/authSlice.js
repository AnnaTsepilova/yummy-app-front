import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from 'redux/auth/authOperations';

const initialState = {
  accessToken: '',
  refreshToken: '',
  sid: '',
  userId: null,
  userName: '',
  userEmail: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;

  if (action.payload.code === 401) {
    state.accessToken = '';
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authOperations.signUp.pending, handlePending)
      .addCase(authOperations.signUp.fulfilled, (state, action) => {
        state.userId = action.payload.id;
      })
      .addCase(authOperations.signUp.rejected, handleRejected)

      .addCase(authOperations.signIn.pending, handlePending)
      .addCase(authOperations.signIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.userEmail = action.payload.user.email;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signIn.rejected, handleRejected);

    // .addCase(authOperations.logOut.pending, handlePending)
    // .addCase(authOperations.logOut.fulfilled, (state, action) => {
    //   state.userId = null;
    //   state.accessToken = null;
    //   state.refreshToken = null;
    //   state.sid = null;
    //   state.isLoggedIn = false;
    // })
    // .addCase(authOperations.logOut.rejected, handleRejected)

    // .addCase(authOperations.refreshToken.pending, (state, action) => {})
    // .addCase(authOperations.refreshToken.fulfilled, (state, action) => {
    //   state.accessToken = action.payload.newAccessToken;
    //   state.refreshToken = action.payload.newRefreshToken;
    //   state.sid = action.payload.newSid;
    //   state.isLoggedIn = true;
    // })
    // .addCase(authOperations.refreshToken.rejected, (state, action) => {})

    // .addCase(authOperations.getUserById.pending, handlePending)
    // .addCase(authOperations.getUserById.fulfilled, (state, action) => {
    //   state.userEmail = action.payload.email;
    //   state.isLoggedIn = true;
    // })
    // .addCase(authOperations.getUserById.rejected, handleRejected);
  },
});

export default authSlice.reducer;
export const { setAccessToken } = authSlice.actions;

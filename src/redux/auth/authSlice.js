import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from 'redux/auth/authOperations';

const initialState = {
  accessToken: '',
  refreshToken: '',
  sid: '',
  userId: null,
  userName: '',
  userEmail: '',
  userAvatar: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;

  if (action.payload === 401) {
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
        state.userId = action.payload.user.id;
      })
      .addCase(authOperations.signUp.rejected, handleRejected)

      .addCase(authOperations.signIn.pending, handlePending)
      .addCase(authOperations.signIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.userId = action.payload.user.id;
        state.userEmail = action.payload.user.email;
        state.userName = action.payload.user.name;
        state.userAvatar = action.payload.user.avatarURL;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signIn.rejected, handleRejected)

      .addCase(authOperations.logOut.pending, handlePending)
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.userId = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.userName = null;
        state.userEmail = null;
        state.userAvatar = '';
      })
      .addCase(authOperations.logOut.rejected, handleRejected)

      .addCase(authOperations.refreshToken.pending, (state, action) => {})
      .addCase(authOperations.refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.refreshToken.rejected, (state, action) => {})

      .addCase(authOperations.getUserById.pending, handlePending)
      .addCase(authOperations.getUserById.fulfilled, (state, action) => {
        state.userEmail = action.payload.email;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.getUserById.rejected, handleRejected)

      .addCase(authOperations.updateUserById.pending, handlePending)
      .addCase(authOperations.updateUserById.fulfilled, (state, action) => {
        state.userEmail = action.payload.email;
        state.userName = action.payload.name;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.updateUserById.rejected, handleRejected)

      .addCase(authOperations.upLoadAvatar.pending, handlePending)
      .addCase(authOperations.upLoadAvatar.fulfilled, (state, action) => {
        state.userAvatar = action.payload.user.avatar;
      })
      .addCase(authOperations.upLoadAvatar.rejected, handleRejected)

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

export default authSlice.reducer;
export const { setAccessToken } = authSlice.actions;

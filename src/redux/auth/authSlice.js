import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  token: null,
  error: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: state => {
      state.isLoading = true;
    },
    authSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    authFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
    },
    logout: state => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
});

export const { authRequest, authSuccess, authFailure, logout } = authSlice.actions;

export const register = formData => async dispatch => {
  dispatch(authRequest());

  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
    const { user, token } = response.data;
    localStorage.setItem('token', token);
    dispatch(authSuccess({ user, token }));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};

export const login = formData => async dispatch => {
  dispatch(authRequest());

  try {
    const response = await axios.post('http://localhost:5000/api/auth/signin', formData);
    const { user, token } = response.data;
    localStorage.setItem('token', token);
    dispatch(authSuccess({ user, token }));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};

export default authSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', user);
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', user);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
        padding: '20px',
      });

      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  token.set(state.auth.accessToken);
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    Notify.warning(error.response.data.message, {
      fontSize: '16px',
      width: '350px',
    });

    return thunkAPI.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});

export const getUserById = createAsyncThunk(
  'auth/user',
  async (userId, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.get(`/auth/${userId}`);
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });

      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  }
);

export const updateUserById = createAsyncThunk(
  'auth/updateUser',
  async (user, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios.put(`/auth/${state.auth.userId}`, user);
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });

      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  }
);

export const upLoadAvatar = createAsyncThunk(
  'auth/upLoadAvatar',
  async (file, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.accessToken);
    try {
      const { data } = await axios({
        method: 'post',
        url: '/auth/avatars',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: file,
      });
      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });

      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    let sid = state.auth.sid;
    if (!sid) {
      console.log(sid);
      return thunkAPI.rejectWithValue();
    }
    const update = state.auth.refreshToken;
    console.log('update', update);
    token.set(update);
    try {
      const { data } = await axios.post('/auth/refresh', {
        sid,
      });
      token.set(data.newAccessToken);

      return data;
    } catch (error) {
      Notify.warning(error.response.data.message, {
        fontSize: '16px',
        width: '350px',
      });

      return thunkAPI.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  }
);

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

import axios from 'axios';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

export const signUpUser = user => {
  return axios.post('/auth/signup', user).then(data => {
    return data;
  });
};

export const signInUser = user => {
  return axios.post('/auth/signin', user).then(data => {
    return data;
  });
};

export const logOutUser = user => {
  return axios.post('/auth/logout', user).then(data => {
    return data;
  });
};

export const getCurrentUserAPI = () => {
  return axios.get('/auth/current').then(data => {
    return data;
  });
};

export const updateUserByIdAPI = userId => {
  return axios.put('/auth', userId).then(data => {
    return data;
  });
};

export const refreshTokenAPI = sid => {
  return axios.put('/auth/refresh', sid).then(data => {
    return data;
  });
};

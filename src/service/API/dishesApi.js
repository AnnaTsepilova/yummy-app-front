import axios from 'axios';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

export const getCategoryListAPI = () => {
  return axios.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};
export const getMainPageAPI = () => {
  return axios.get('/recipes/main-page').then(({ data }) => {
    console.log('api', data);
    return data;
  });
};

export const getRecipeByIdAPI = () => {
  return axios.get('/recipes/:id').then(({ data }) => {
    return data;
  });
};

export const getRecipeByCategoryAPI = () => {
  return axios.get('/recipes/:category').then(({ data }) => {
    return data;
  });
};

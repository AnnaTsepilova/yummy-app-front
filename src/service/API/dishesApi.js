import axios from 'axios';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mjg2ZjAzMzBhOThiNWM2MWU4YjUzNiIsImlhdCI6MTY4MDU1NTUxNiwiZXhwIjoxNjgwNTU5MTE2fQ.T850nhhA6YYFiSGILIjM9fBNyhKR8TRp-aJm8Am8AH0`;

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

export const getUserRecipe = () => {
  return axios.get('/favorite/list').then(({ data }) => {
    return data;
  });
};

export const addRecipeTofavoriteAPI = id => {
  return axios.post(`/favorite/${id}`).then(({ data }) => {
    return data;
  });
};

export const removeRecipeFromFavoriteAPI = id => {
  return axios.put(`/favorite/${id}`).then(({ data }) => {
    return data;
  });
};

export const getFavoriteRecipesAPI = () => {
  return axios.get('/favorite/list').then(({ data }) => {
    return data;
  });
};

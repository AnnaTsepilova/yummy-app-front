import axios from 'axios';

export const getCategoryListAPI = () => {
  return axios.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

export const getLimitedRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/${category}`).then(({ data }) => {
    return data;
  });
};

export const getAllRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/${category}`).then(({ data }) => {
    return data;
  });
};

export const getRecipesByQueryAPI = (query, page = 1, per_page = 12) => {
  return axios
    .get(`/recipes/search?title=${query}&page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      return data;
    });
};

export const getRecipesByIngredientAPI = (query, page = 1, per_page = 12) => {
  return axios
    .get(
      `/recipes/search?ingredient=${query}&page=${page}&per_page=${per_page}`
    )
    .then(({ data }) => {
      return data;
    });
};

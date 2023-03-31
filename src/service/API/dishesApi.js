import axios from 'axios';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

export const getCategoryListAPI = () => {
  return axios.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

export const getLimitedRecipesByCategoryAPI = (category, limit) => {
  return axios.get(`/recipes/${category}/${limit}`).then(({ data }) => {
    return data;
  });
};

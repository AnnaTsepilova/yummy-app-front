import axios from 'axios';

// Add Recipe Page
export const getIngredientsList = async () => {
  return axios.get(`/ingredients`).then(({ data }) => {
    return data;
  });
};

export const getPopularRecipe = async () => {
  return axios.get(`/recipes/popular`).then(({ data }) => {
    return data;
  });
};

export const addRecipe = async data => {
  return axios.post(`/ownRecipes/`, data).then(({ result }) => {
    return result;
  });
};

export const addRecipeImg = async data => {
  const formData = new FormData();
  formData.append('image', data);
  return axios
    .post(`/ownRecipes/recipeImage`, formData)
    .then(data => data.data.response);
};

import axios from 'axios';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

export const getCategoryListAPI = () => {
  return axios.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

export const patchShoppingList = async info => {
  try {
    const { data } = await axios.patch(`/shoping-list/`, info);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getShoppingList = async () => {
  try {
    const { data } = await axios.get(`/shopping-list/`);
    console.log({ shoppingList: data });
    return { shoppingList: data };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const addShoppingList = async obj => {
  try {
    const { data } = await axios.post(`/shopping-list/add`, obj);
    console.log({ shoppingList: data });
    return { shoppingList: data };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const deleteShoppingList = async obj => {
  try {
    const { data } = await axios.delete(
      `/shopping-list/remove/${obj.id}?measure=${obj.measure}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
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

export const getMyRecipeAPI = () => {
  return axios.get('/recipes').then(({ data }) => {
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

export const removeMyRecipeAPI = id => {
  return axios.delete(`/recipes/remove/${id}`).then(({ data }) => {
    return data;
  });
};

export const getFavoriteRecipesAPI = () => {
  return axios.get('/favorite/list').then(({ data }) => {
    return data;
  });
};

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getRecipesByQueryAPI = (query, page = 1, per_page = 12) => {
  return axios
    .get(
      `/recipes/search/recipes?title=${query}&ingredient=${query}&page=${page}&per_page=${per_page}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const getRecipesByIngredientAPI = (query, page = 1, per_page = 12) => {
  return axios
    .get(
      `/recipes/search/recipes?ingredient=${query}&page=${page}&per_page=${per_page}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const getIngredientsList = async () => {
  try {
    const ingredientsList = await axios.get(`/ingredients/list`);
    return ingredientsList;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

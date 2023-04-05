import axios from 'axios';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

const setToken = accessToken => {
  if (accessToken) {
    axios.defaults.headers.common.authorization = `Bearer ${accessToken}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

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
  setToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjgzZTIwNTg4MmM5MTRkZGIzNTQ3YiIsInNpZCI6IjY0MmQ5OWMxZDA2NTA1NzhkYjEzZTM4NyIsImlhdCI6MTY4MDcxMDA4MSwiZXhwIjoxNjgwNzEzNjgxfQ.q5PQPDheFX_sQbx7CW_jqSm4AHR1JNoMPEIkSeO6w_I'
  );
  try {
    const { data } = await axios.get(`/shopping-list/`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const deleteShoppingList = async id => {
  try {
    const { data } = await axios.delete(`/shopping-list/${id}`);
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

export const getMainPageAPI = () => {
  return axios.get('/recipes/main-page').then(({ data }) => {
    console.log('api', data);
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

export const getRecipesByQueryAPI = (query, page = 1, per_page = 12) => {
  return axios
    .get(`/recipes/search/${query}?page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
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

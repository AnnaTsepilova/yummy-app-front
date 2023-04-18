import axios from 'axios';

export const addRecipeTofavoriteAPI = id => {
  return axios.post(`/favorites/${id}`).then(({ data }) => {
    return data;
  });
};

export const addShoppingList = async obj => {
  try {
    const { data } = await axios.post(
      `/shopping-list/?recipeId=${obj[1]}`,
      obj[0]
    );

    return { shoppingList: data };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const deleteShoppingList = async obj => {
  try {
    if (obj.length > 0) {
      const { data } = await axios.delete(
        `/shopping-list/${obj[0].ingredientId}?measure=${obj[0].measure}&recipeId=${obj[1]}`
      );
      return data;
    }
    const { data } = await axios.delete(
      `/shopping-list/${obj.id}?measure=${obj.measure}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getFavoriteRecipesAPI = page => {
  if (page === 'all') {
    return axios.get(`/favorites/list?all=true`).then(({ data }) => {
      return data;
    });
  }
  return axios.get(`/favorites/list?page=${page}`).then(({ data }) => {
    return data;
  });
};

export const getMyRecipeAPI = page => {
  return axios.get(`/ownRecipes?page=${page}`).then(({ data }) => {
    return data;
  });
};

export const getRecipeByIdAPI = id => {
  return axios.get(`/recipes/id/${id}`).then(({ data }) => {
    return data;
  });
};

export const getShoppingList = async () => {
  try {
    const { data } = await axios.get(`/shopping-list/`);
    return { shoppingList: data };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const removeMyRecipeAPI = id => {
  return axios.delete(`/ownRecipes/${id}`).then(({ data }) => {
    return data;
  });
};

export const removeRecipeFromFavoriteAPI = id => {
  return axios.delete(`/favorites/${id}`).then(({ data }) => {
    return data._id;
  });
};

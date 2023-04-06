import axios from 'axios';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

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

// export const getMainPageAPI = () => {
//   return axios.get('/recipes/main-page').then(({ data }) => {
//     console.log('api', data);
//     return data;
//   });
// };

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

// export const getRecipesByQueryAPI = query => {
//   return axios.get(`/recipes/search/${query}`).then(({ data }) => {
//     return data;
//   });
// };

// export const getRecipesByQueryAPI = query => {
//   return axios
//     .post('/recipes/search', {
//       value: query,
//       flags: 'i',
//     })
//     .then(({ data }) => {
//       return data;
//     });
// };

export const getRecipesByQueryAPI = ({ value, flags }) => {
  return axios
    .post('/recipes/search', {
      value,
      flags,
    })
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

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// export const getRecipesByIngredientAPI = ingredientTtl => {
//   return axios.get(`/ingredients/${ingredientTtl}`).then(({ data }) => {
//     return data;
//   });
// };

export const getFullCategoryList = state => state.outerRecipes.categoryList;

export const getLimitedRecipes = state =>
  state.outerRecipes.limitedRecipesByCategory;

export const getRecipesBySearchQuery = state =>
  state.outerRecipes.recipesByQuery;

export const getError = state => state.outerRecipes.isError;

export const getRecipesListByIngredient = state =>
  state.ingredients.recipesByIngredients;
export const getIsIngredientsFetching = state =>
  state.ingredients.isIngredientsFetching;
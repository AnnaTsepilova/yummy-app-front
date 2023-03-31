export const getFullCategoryList = state => state.outerRecipes.categoryList;

export const getLimitedRecipes = state =>
  state.outerRecipes.limitedRecipesByCategory;

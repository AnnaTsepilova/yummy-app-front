export const selectFavoriteRecipes = state => state.userRecipes.favorite;

export const selectMyRecipes = state => state.userRecipes.myRecipes;

export const selectIsLoading = state => state.userRecipes.isLoading;

export const selectUserError = state => state.userRecipes.error;

export const selectShoppingList = state => state.userRecipes.shoppingList;

export const selectRecipe = state => state.userRecipes.recipeById;

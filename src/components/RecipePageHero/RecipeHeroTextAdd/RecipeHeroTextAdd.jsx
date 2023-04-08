import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteRecipes,
  selectIsLoading,
  selectRecipe,
} from 'redux/userRecipes/userRecipesSelectors';
import {
  MainPageTitle,
  Text,
  Button,
  Box,
  Time,
  ClockSvg,
} from './RecipeHeroTextAdd.styled';
import {
  addRecipeToFavorite,
  getFavoriteRecipes,
  removeRecipeFromFavorite,
} from 'redux/userRecipes/userResipesOperations';
import { useEffect } from 'react';
import ButtonLoader from './ButtonLoader/ButtonLoader';
import ClockIconPng from 'images/Recipe/clock.png';

const RecipeHeroTextAdd = ({ title, description, time, id }) => {
  const recipe = useSelector(selectRecipe); // eslint-disable-line

  const userFavouritesRecipes = useSelector(selectFavoriteRecipes);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    // setIsFavorite(userFavouritesRecipes.includes(id));
    dispatch(getFavoriteRecipes());
  }, [dispatch]);
  const func = () => {
    const check = userFavouritesRecipes.filter(item => item._id === recipe._id);
    if (check.length > 0) {
      return true;
    }
    return false;
  };
  const handleFavoriteButton = id => {
    const check = func();
    if (check) {
      return dispatch(removeRecipeFromFavorite(id));
    }
    return dispatch(addRecipeToFavorite(id));
  };

  return (
    // <div>
    //   <h1>{title}</h1>
    //   <p>{description}</p>
    //   <button>knopka</button>
    // </div>
    <>
      <MainPageTitle>{title}</MainPageTitle>
      <Text>{description}</Text>
      <Button
        disabled={isLoading}
        whileHover={{
          backgroundColor: '#8BAA36',
          borderColor: '#8BAA36',
        }}
        onClick={() => handleFavoriteButton(recipe._id)}
      >
        {isLoading ? (
          <ButtonLoader color="white" width={25} />
        ) : func() ? (
          'Remove from favorite recipes'
        ) : (
          'Add to favorite recipes'
        )}
      </Button>
      <Box>
        <ClockSvg src={ClockIconPng} alt="Clock" />
        <Time>{time} min</Time>
      </Box>
    </>
  );
};

export default RecipeHeroTextAdd;

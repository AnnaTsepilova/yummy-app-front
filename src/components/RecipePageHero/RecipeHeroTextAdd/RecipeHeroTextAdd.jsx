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
} from './RecipeHeroTextAdd.styled';
import {
  addRecipeToFavorite,
  removeRecipeFromFavorite,
} from 'redux/userRecipes/userResipesOperations';
import { useEffect, useState } from 'react';
import ButtonLoader from './ButtonLoader/ButtonLoader';

const RecipeHeroTextAdd = ({ title, description, time, id }) => {
  const recipe = useSelector(selectRecipe); // eslint-disable-line

  const userFavouritesRecipes = useSelector(selectFavoriteRecipes);
  const [isFavorite, setIsFavorite] = useState();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    setIsFavorite(userFavouritesRecipes.includes(id));
  }, [userFavouritesRecipes, id]);

  const handleFavoriteButton = id => {
    if (isFavorite) {
      dispatch(removeRecipeFromFavorite(id));
    } else {
      dispatch(addRecipeToFavorite(id));
    }
    setIsFavorite(!isFavorite);
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
        onClick={() => handleFavoriteButton(id)}
      >
        {isLoading ? (
          <ButtonLoader color="white" width={25} />
        ) : isFavorite ? (
          'Remove to favorite recipes'
        ) : (
          'Add to favorite recipes'
        )}
      </Button>
      <Box>
        {/* <ClockSvg /> */}
        <Time>{time} min</Time>
      </Box>
    </>
  );
};

export default RecipeHeroTextAdd;

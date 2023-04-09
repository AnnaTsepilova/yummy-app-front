import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ClockIconPng from 'images/Recipe/clock.png';
import {
  RecipeHeroContentWrapper,
  PageTitle,
  Text,
  TimeBox,
  Time,
  ClockSvg,
} from 'components/RecipePageHero/RecipeHeroContent/RecipeHeroContent.styled';
import { StyledAddRecipeBtn } from 'components/Buttons/Buttons.styled';

import ButtonLoader from 'components/RecipePageHero/RecipeHeroContent/ButtonLoader/ButtonLoader';

import {
  addRecipeToFavorite,
  getFavoriteRecipes,
  removeRecipeFromFavorite,
} from 'redux/userRecipes/userResipesOperations';
import {
  selectFavoriteRecipes,
  selectIsLoading,
  selectRecipe,
} from 'redux/userRecipes/userRecipesSelectors';

const RecipeHeroContent = ({ title, description, time, id }) => {
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
    <RecipeHeroContentWrapper>
      <PageTitle>{title}</PageTitle>
      <Text>{description}</Text>
      <StyledAddRecipeBtn
        disabled={isLoading}
        // whileHover={{
        //   backgroundColor: '#8BAA36',
        //   borderColor: '#8BAA36',
        // }}
        onClick={() => handleFavoriteButton(recipe._id)}
      >
        {isLoading ? (
          <ButtonLoader color="white" width={15} />
        ) : func() ? (
          'Remove from favorite recipes'
        ) : (
          'Add to favorite recipes'
        )}
      </StyledAddRecipeBtn>
      <TimeBox>
        <ClockSvg src={ClockIconPng} alt="Clock" />
        <Time>{time} min</Time>
      </TimeBox>
    </RecipeHeroContentWrapper>
  );
};

export default RecipeHeroContent;
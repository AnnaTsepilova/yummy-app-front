import React from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  List,
  ListHeader,
  ListHeaderText,
  ListItem,
  Wrapper,
  ButtonWrapper,
  Measure,
  Img,
  Title,
} from 'components/RecipeInngredientsList/RecipeInngredientsList.styled';
import CustomCheckbox from 'components/RecipeInngredientsList/CheckBox/CheckBox';
import { selectRecipe, selectShoppingList } from 'redux/userRecipes/userRecipesSelectors';
import { ReactComponent as DefaultImage } from 'images/Plugs/image.svg';

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  const list = useSelector(selectRecipe); // eslint-disable-line
  const shoppingList = useSelector(selectShoppingList);
  return (
    <Box>
      <ListHeader>
        <ListHeaderText>Ingredients</ListHeaderText>
        <div>
          <ListHeaderText>Number</ListHeaderText>
          <ListHeaderText>Add to list</ListHeaderText>
        </div>
      </ListHeader>
      <List>
        {ingredients?.map(({ _id, ttl, desc, thb, measure }) => {
          const isChecked = shoppingList?.filter(item => item.id === _id).flatMap(item => item.recipesId).includes(recipeId);
          if (!_id) {
            return null;
          }

          return (
            <ListItem key={_id}>
              <Wrapper>
                {thb === '' ? (
                  <DefaultImage />
                ) : (
                  <Img alt={ttl} src={thb} width={48} height={48} />
                )}
                <Title>{ttl}</Title>
              </Wrapper>
              <ButtonWrapper>
                <Measure>{measure}</Measure>
                <CustomCheckbox
                  recipeId={recipeId}
                  ingredientId={_id}
                  measure={measure}
                  isChecked={isChecked}
                />
              </ButtonWrapper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default RecipeInngredientsList;

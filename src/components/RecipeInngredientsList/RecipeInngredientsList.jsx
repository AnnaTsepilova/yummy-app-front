import React from 'react';
import {
  Box,
  List,
  ListItemHeader,
  ListHeaderText,
  ListItem,
  Wrapper,
  ButtonWrapper,
  Measure,
  Img,
  Title,
} from './RecipeInngredientsList.styled';
import { useSelector } from 'react-redux';
import CustomCheckbox from './CheckBox/CheckBox';
import { selectRecipe } from 'redux/userRecipes/userRecipesSelectors';

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  const list = useSelector(selectRecipe);

  return (
    <Box>
      <List>
        <ListItemHeader>
          <ListHeaderText>Product</ListHeaderText>
          <div>
            <ListHeaderText>Number</ListHeaderText>
            <ListHeaderText>Add to list</ListHeaderText>
          </div>
        </ListItemHeader>
        {ingredients?.map(({ _id, ttl, desc, thb, measure }) => {
          const isChecked = list?.some(item => item._id === _id); // eslint-disable-line
          if (!_id) {
            return null;
          }
          return (
            <ListItem key={_id}>
              <Wrapper>
                <Img alt={ttl} src={thb} width={48} height={48} />
                <Title>{ttl}</Title>
              </Wrapper>
              <ButtonWrapper>
                <Measure>{measure}</Measure>
                <CustomCheckbox
                // recipeId={recipeId}
                // ingredientId={_id}
                // isChecked={isChecked}
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

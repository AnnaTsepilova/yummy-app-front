import React from 'react';
import {
  Item,
  ImgWrapper,
  ContentWrapper,
  RecipeTitle,
  RecipeText,
  RecipeTime,
  RecipeBtn,
  DeleteBtn,
  StyledIcon,
  RecipeImg,
  RecipeSubtitle,
} from './MyRecipeItem.styled';
// import { SearchGreenBtn } from 'components/Buttons/Buttons';

const MyRecipesItem = () => {
  return (
    <Item>
      <ImgWrapper>
        <RecipeImg
          src="https://via.placeholder.com/150x150.png?text=Recipe"
          alt="#"
        />
      </ImgWrapper>
      <ContentWrapper>
        <RecipeTitle>Apple Frangipan Tart</RecipeTitle>
        <RecipeText>
          General Tso’s Chicken Is A Favorite Chinese Food Takeout Choice That
          Is Sweet And Slightly Spicy With A Kick From Garlic And Ginger.
        </RecipeText>
        <RecipeSubtitle>
          General Tso’s Chicken Is A Favorite Chinese Food Takeout Choice That
        </RecipeSubtitle>
        <RecipeTime>20 min</RecipeTime>
        <RecipeBtn> See reecipe </RecipeBtn>
        <DeleteBtn>
          <StyledIcon />
        </DeleteBtn>
      </ContentWrapper>
    </Item>
  );
};

export default MyRecipesItem;

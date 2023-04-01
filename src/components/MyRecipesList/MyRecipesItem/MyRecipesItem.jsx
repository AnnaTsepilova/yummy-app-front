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
import { Link } from 'react-router-dom';
// import { SearchGreenBtn } from 'components/Buttons/Buttons';
import { useDispatch } from 'react-redux';

const MyRecipesItem = ({ data }) => {
  const { _id, title, description, preview, time } = data;

  const dispatch = useDispatch();

  const deleteRecipeFromMy = () => {};

  return (
    <Item>
      <ImgWrapper>
        <RecipeImg src={preview} alt={title} />
      </ImgWrapper>
      <ContentWrapper>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeText>{description}</RecipeText>
        <RecipeSubtitle>
          General Tso’s Chicken Is A Favorite Chinese Food Takeout Choice That
        </RecipeSubtitle>
        <RecipeTime>{time} min</RecipeTime>
        <RecipeBtn as={Link} to={`/recipe/${_id}`}>
          See reecipe
        </RecipeBtn>
        <DeleteBtn onClick={() => dispatch(deleteRecipeFromMy(_id))}>
          <StyledIcon />
        </DeleteBtn>
      </ContentWrapper>
    </Item>
  );
};

export default MyRecipesItem;

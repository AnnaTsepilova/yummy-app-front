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
import { useDispatch } from 'react-redux';
import { StyledNotFoundImg } from './MyRecipeItem.styled';

const MyRecipesItem = ({ data, btnStyle, removeFnc }) => {
  const { _id, title, description, preview, time } = data;

  const dispatch = useDispatch();

  return (
    <Item>
      <ImgWrapper>
        {preview ? (
          <RecipeImg src={preview} alt={title} />
        ) : (
          <StyledNotFoundImg />
        )}
      </ImgWrapper>
      <ContentWrapper>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeText>{description}</RecipeText>
        <RecipeSubtitle>
          General Tso’s Chicken Is A Favorite Chinese Food Takeout Choice That
        </RecipeSubtitle>
        <RecipeTime>{time} min</RecipeTime>
        <RecipeBtn view={btnStyle} as={Link} to={`/recipe/${_id}`}>
          See reecipe
        </RecipeBtn>
        <DeleteBtn view={btnStyle} onClick={() => dispatch(removeFnc(_id))}>
          <StyledIcon view={btnStyle} />
        </DeleteBtn>
      </ContentWrapper>
    </Item>
  );
};

export default MyRecipesItem;

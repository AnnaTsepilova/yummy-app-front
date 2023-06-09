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
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StyledNotFoundImg } from './MyRecipeItem.styled';
import { selectFavoriteRecipes, selectMyRecipes } from 'redux/userRecipes/userRecipesSelectors';
import { getFavoriteRecipes, getMyRecipe } from 'redux/userRecipes/userRecipesOperations';

const MyRecipesItem = ({ data, btnStyle, removeFnc, change, page }) => {
  const { _id, title, description, preview, time } = data;
  const dispatch = useDispatch();
  const recipes = useSelector(selectFavoriteRecipes);
  const myrecipes = useSelector(selectMyRecipes);
  const { pathname } = useLocation();
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
        <DeleteBtn view={btnStyle} onClick={async () => {
          await dispatch(removeFnc(_id))
          if (recipes.length === 1 || myrecipes.length === 1) {
            if (page > 1) {
              change(prev => prev - 1);
            } else {
              pathname === '/my' ? dispatch(getMyRecipe(1)) : dispatch(getFavoriteRecipes(1));
            }
          }
        }}>
          <StyledIcon view={btnStyle} />
        </DeleteBtn>
      </ContentWrapper>
    </Item>
  );
};

export default MyRecipesItem;

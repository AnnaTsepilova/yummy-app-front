import React from 'react';
import { Link } from 'react-router-dom';
import { Card, RecipePicture, RecipeTitle } from './RecipeCard.styled';
import NotFoundImg from '../../images/NotFound/noimage.jpg';

export const RecipeCard = ({ data }) => {
  return (
    <Card>
      <Link to={`/recipe/${data._id}`}>
        <RecipePicture
          src={data.preview ? data.preview : { NotFoundImg }}
          alt={data.title}
        />
        <RecipeTitle data-id={data._id}>{data.title}</RecipeTitle>
      </Link>
    </Card>
  );
};

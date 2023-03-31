import React from 'react';
import { PopUp, RecipeLink, Title } from './ChooseYourBreakfast.styled';

const ChooseYourBreakfast = () => {
  return (
    <PopUp>
      <Title>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </Title>
      <RecipeLink to="/categories/breakfast">See recipes</RecipeLink>
    </PopUp>
  );
};

export default ChooseYourBreakfast;

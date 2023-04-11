import React from 'react';
import {
  BoxLink,
  PopUp,
  RecipeLink,
  Title,
} from './ChooseYourBreakfast.styled';
import { ReactComponent as Arrow } from '../../../images/BreakfastArrow/arrow-narrow-right.svg';
const ChooseYourBreakfast = () => {
  return (
    <PopUp>
      <Title>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </Title>
      <BoxLink>
        <RecipeLink to="/categories/breakfast">
          See recipes
          <Arrow style={{ color: 'inherit' }} />
        </RecipeLink>
      </BoxLink>
    </PopUp>
  );
};

export default ChooseYourBreakfast;

import React from 'react';
import {
  TitleWrapper,
  Title,
  Products,
  RightPartText,
} from 'components/IngredientsShoppingList/TitleShoppingList/TitleShoppingList.styled';

const TitleShoppingList = () => {
  return (
    <TitleWrapper>
      <Title>
        <Products>Products</Products>
        <RightPartText>
          <span>Number</span>
          <span>Remove</span>
        </RightPartText>
      </Title>
    </TitleWrapper>
  );
};

export default TitleShoppingList;

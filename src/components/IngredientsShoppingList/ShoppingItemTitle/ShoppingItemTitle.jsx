import React from 'react';
import { Title } from 'components/IngredientsShoppingList/ShoppingItemTitle/ShoppingItemTitle.styled';

const ShoppingItemTitle = ({ name }) => {
  return <Title>{name}</Title>;
};

export default ShoppingItemTitle;

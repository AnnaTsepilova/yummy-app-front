import React from 'react';

import { Title } from 'pages/ShoppingListPage/ShoppingListPage.styled';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
// import { Wrraper } from './ShoppingListPage.styled';

const ShoppingListPage = () => {
  return (
    <div>
      <Title>Shopping list</Title>
      <IngredientsShoppingList />
    </div>
  );
};

export default ShoppingListPage;

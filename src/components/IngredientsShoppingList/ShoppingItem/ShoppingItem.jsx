import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import defaultImage from 'images/HeaderMenu/header-menu.svg';

import {
  ListItemSL,
  Wrapper,
  RightWrapper,
  Button,
} from 'components/IngredientsShoppingList/ShoppingItem/ShoppingItem.styled';
import ShoppingItemPhoto from 'components/IngredientsShoppingList/ShoppingItemFoto/ShoppingItemFoto';
import ShoppingItemTitle from 'components/IngredientsShoppingList/ShoppingItemTitle/ShoppingItemTitle';
import ShoppingItemNumber from 'components/IngredientsShoppingList/ShoppingItemNumber/ShoppingItemNumber';

const ShoppingItem = ({ image, name, measure, id, onDelete }) => {
  return (
    <ListItemSL>
      <Wrapper>
        <ShoppingItemPhoto image={image ? image : defaultImage} />
        <ShoppingItemTitle name={name} />
      </Wrapper>
      <div>
        {[measure].map(item => (
          <RightWrapper key={nanoid()}>
            <ShoppingItemNumber text={item} />
            <Button
              type="button"
              onClick={e => {
                onDelete(item, e);
              }}
            ></Button>
          </RightWrapper>
        ))}
      </div>
    </ListItemSL>
  );
};

export default ShoppingItem;

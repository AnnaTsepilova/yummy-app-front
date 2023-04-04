import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { WrapperLi, RightWrapper, Button } from './ShoppingItem.styled';
import ShoppingItemPhoto from '../ShoppingItemFoto/ShoppingItemFoto';
import ShoppingItemDescription from '../ShoppingItemDescription/ShoppingItemDescription';
import ShoppingItemNumber from '../ShoppingItemNumber/ShoppingItemNumber';
import { ReactComponent as CloseIcon } from '../../../images/AddRecipe/close.svg';
import defaultImage from '../../../images/HeaderMenu/header-menu.svg';

const ShoppingItem = ({ image, name, messure, id, onDelete }) => {
  return (
    <WrapperLi>
      <ShoppingItemPhoto image={image ? image : defaultImage} />
      <div>
        <ShoppingItemDescription name={name} />
      </div>
      <div>
        {messure.map(item => (
          <RightWrapper key={nanoid()}>
            <ShoppingItemNumber text={item} />
            <Button
              type="button"
              onClick={e => {
                onDelete(item, e);
              }}
            >
              KNOPKA
              <CloseIcon width="18px" height="18px" />
            </Button>
          </RightWrapper>
        ))}
      </div>
    </WrapperLi>
  );
};

export default ShoppingItem;

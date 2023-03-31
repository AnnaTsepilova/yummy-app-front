import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Wrapper } from './ShoppingItem.styled';
import ShoppingItemPhoto from '../ShoppingItemFoto/ShoppingItemFoto';
import ShoppingItemDescription from '../ShoppingItemDescription/ShoppingItemDescription';

const ShoppingItem = ({ image, name, measure, id, onDelete }) => {
  return (
    <Wrapper>
      <ShoppingItemPhoto image={image ? image : defaultImage} />
      <div>
        <ShoppingItemDescription name={name} />
      </div>
      <div className={css.rightThumb}>
        {measure.map(item => (
          <div className={css.rightWrapper} key={nanoid()}>
            <ShoppingItemNumber text={item} />
            <button
              className={css.button}
              type="button"
              onClick={e => {
                onDelete(item, e);
              }}
            >
              <CloseIcon width="18px" height="18px" />
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ShoppingItem;

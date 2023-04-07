import React from 'react';
import { Wrapper, Name } from './ShoppingItemDescription.styled';

const ShoppingItemDescription = ({ name }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default ShoppingItemDescription;

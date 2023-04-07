import React from 'react';
import { Wrapper, Image } from './ShoppingItemFoto.styled';

const ShoppingItemPhoto = ({ image }) => {
  return (
    <Wrapper>
      <Image src={image} alt="ingredient" />
    </Wrapper>
  );
};

export default ShoppingItemPhoto;

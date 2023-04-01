import React from 'react';
import { Form, Input, Wrapper } from './Search.styled';
import { SearchBlackBtn } from './../Buttons/Buttons';

const Search = () => {
  return (
    <Wrapper>
      <Form>
        <Input type="text" autocomplete="off" placeholder="Beef |" />
        <SearchBlackBtn type="submit">Search</SearchBlackBtn>
      </Form>
    </Wrapper>
  );
};

export default Search;

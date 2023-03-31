import React from 'react';
import { Form, Input } from './Search.styled';
import { SearchBlackBtn } from './../Buttons/Buttons';

const Search = () => {
  return (
    <Form>
      <Input type="text" autocomplete="off" placeholder="Beef |" />
      <SearchBlackBtn type="submit">Search</SearchBlackBtn>
    </Form>
  );
};

export default Search;

import { BtnWrapper, Form, Input } from 'components/Main/Search/Search.styled';
import { Wrapper } from './SearchForm.styled';

import { SearchGreenBtn } from 'components/Buttons/Buttons';
import React, { useState } from 'react';

export const SearchForm = ({
  handleOnSubmit,
  type = 'title',
  styled,
  startQuery,
}) => {
  const [searchValue, setInputValue] = useState(startQuery ?? '');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleOnSubmit(searchValue, type);
  }

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={searchValue} onChange={handleInputChange} />
          <BtnWrapper>
            <SearchGreenBtn type="submit">Search</SearchGreenBtn>{' '}
          </BtnWrapper>
        </Form>
      </Wrapper>
    </>
  );
};

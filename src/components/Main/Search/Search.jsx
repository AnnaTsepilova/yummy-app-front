import React from 'react';
import { BtnWrapper, Form, Input, Wrapper } from './Search.styled';
import { SearchBlackBtn } from '../../Buttons/Buttons';
import HeroBcg from '../Hero/HeroBcg/LeftBcg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setSearchResults } from 'redux/formSearch/searchSlice';
import ChooseYourBreakfast from 'components/Main/ChooseYourBreakfast/СhooseYourBreakfast';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Search = ({ startQuery }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setInputValue] = useState(startQuery ?? '');

  const handleQueryChange = e => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      Notify.warning('Write something.', {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
      return;
    }
    dispatch(setSearchResults(e.target.value));
    navigate(`/search?query=${searchValue}&type=title`);
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit} startQuery={startQuery}>
          <Input
            onChange={handleQueryChange}
            searchQuery=""
            value={searchValue}
            name="search"
            type="text"
            autocomplete="off"
            placeholder="Beef |"
          />
          <BtnWrapper>
            <SearchBlackBtn type="submit">Search</SearchBlackBtn>{' '}
          </BtnWrapper>
        </Form>
        <ChooseYourBreakfast />
        <HeroBcg />
      </Wrapper>
    </>
  );
};

export default Search;

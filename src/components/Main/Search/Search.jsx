import React from 'react';
import { Form, Input, Wrapper } from './Search.styled';
import { SearchBlackBtn } from '../../Buttons/Buttons';
import HeroBcg from '../Hero/HeroBcg/LeftBcg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { updateSearchQuery } from 'redux/search/searchSlice';

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('atatata');
      return;
    }
    dispatch(updateSearchQuery(e.target.value));
    navigate('/search');
  };

  return (
    <>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleQueryChange}
            searchQuery=""
            name="search"
            type="text"
            autocomplete="off"
            placeholder="Beef |"
          />
          <SearchBlackBtn type="submit">Search</SearchBlackBtn>
        </Form>
        <HeroBcg />
      </Wrapper>
    </>
  );
};

export default Search;

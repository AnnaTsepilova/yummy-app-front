import { useState } from 'react';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';
import { SearchWrapper } from './SearchBar.styled';

const SearchBar = ({ handleOnSubmit, startType, startQuery }) => {
  const [type, setType] = useState('');

  const typeSubmit = inputType => {
    const { value } = inputType;
    setType(value);
  };

  return (
    <SearchWrapper>
      <SearchForm
        type={type}
        handleOnSubmit={handleOnSubmit}
        startQuery={startQuery}
      />
      <SearchTypeSelector startType={startType} typeSubmit={typeSubmit} />
    </SearchWrapper>
  );
};

export default SearchBar;

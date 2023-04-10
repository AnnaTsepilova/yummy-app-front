import styled from 'styled-components';
import SearchGlassSvg from 'images/Search/search.svg';
import SearchGlassSvgGreen from 'images/Search/search-green.svg';

export const Search = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  background-image: url('${SearchGlassSvg}');

  &:hover,
  &:focus,
  &:active {
    background-image: url('${SearchGlassSvgGreen}');
    transition: background-image var(--transition-function);
  }
`;

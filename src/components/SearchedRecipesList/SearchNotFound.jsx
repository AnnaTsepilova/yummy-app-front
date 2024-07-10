import mobSearch1 from 'images/Search/SearchNotFound/basket_search_mobile@1x.png';
import mobSearch2 from 'images/Search/SearchNotFound/basket_search_mobile@2x.png';
import tabSearch1 from 'images/Search/SearchNotFound/basket_search_from_desc_to_tab@1x.png';
import tabSearch2 from 'images/Search/SearchNotFound/basket_search_from_desc_to_tab@2x.png';
import deskSearch1 from 'images/Search/SearchNotFound/basket_search_from_desc_to_tab@1x.png';
import deskSearch2 from 'images/Search/SearchNotFound/basket_search_from_desc_to_tab@2x.png';
import {
  SearchWrapper,
  SearchText,
  SearchImage,
} from './SearchNotFound.styled';

export const SearchNotFound = ({ text }) => {
  return (
    <SearchWrapper>
      <SearchImage>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${deskSearch1}, ${deskSearch2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${tabSearch1}, ${tabSearch2} 2x`}
          />
          <img
            src={mobSearch1}
            srcSet={`${mobSearch1}, ${mobSearch2} 2x`}
            alt="Error"
          />
        </picture>
      </SearchImage>
      <SearchText>{text}</SearchText>
    </SearchWrapper>
  );
};

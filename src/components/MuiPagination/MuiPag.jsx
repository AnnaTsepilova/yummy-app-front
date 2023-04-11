import { Pagination } from '@mui/material';

import { Wrapper } from './MuiPag.styled';

export const MuiPag = ({ count, page, handleChange }) => {
  return (
    <Wrapper>
      <Pagination
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        siblingCount={0}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

import { Pagination } from '@mui/material';

import { Wrapper } from './MuiPag.styled';

export const MuiPag = ({ count, page, handleChange }) => {
  return (
    <Wrapper>
      <Pagination
        siblingCount={0}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

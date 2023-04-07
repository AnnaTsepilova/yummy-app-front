import React from 'react';

import { StyledPageTitle } from 'components/PageTitle/PageTitle.styled';

const PageTitle = ({ children }) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;

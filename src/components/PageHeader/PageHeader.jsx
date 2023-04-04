import React from 'react';

import { StyledPageHeader } from './PageHeader.styled';

const PageHeader = ({ children }) => {
  return <StyledPageHeader>{children}</StyledPageHeader>;
};

export default PageHeader;

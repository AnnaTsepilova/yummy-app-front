import React from 'react';

import {
  NotFoundSvg,
  NotFoundContentWrapper,
  NotFoundTitle,
  NotFoundText,
} from 'pages/NotFoundPage/NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <>
      <NotFoundSvg />
      <NotFoundContentWrapper>
        <NotFoundTitle>We are sorry,</NotFoundTitle>
        <NotFoundText>
          but the page you were looking for can't be found.
        </NotFoundText>
      </NotFoundContentWrapper>
    </>
  );
};

export default NotFoundPage;

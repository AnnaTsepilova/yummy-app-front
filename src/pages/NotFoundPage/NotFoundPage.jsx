import React from 'react';

import { NotFoundSvg } from 'pages/NotFoundPage/NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <>
      <NotFoundSvg />
      <p>We are sorry, </p>
      <p>but the page you were looking for can't be found..</p>
    </>
  );
};

export default NotFoundPage;

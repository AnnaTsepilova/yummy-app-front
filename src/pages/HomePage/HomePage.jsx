import React from 'react';
import { Container } from './HomePage.styled';

import ChooseYourBreakfast from 'components/ChooseYourBreakfast/СhooseYourBreakfast';
import Main from 'components/Main/Main';
import Search from 'components/Search/Search';

const HomePage = () => {
  return (
    <Container>
      <Main />
      <ChooseYourBreakfast />
      <Search />
    </Container>
  );
};

export default HomePage;

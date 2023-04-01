import React from 'react';
import { Container } from './HomePage.styled';

import ChooseYourBreakfast from 'components/ChooseYourBreakfast/СhooseYourBreakfast';
import Main from 'components/Main/Main';
import Search from 'components/Search/Search';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';

const HomePage = () => {
  return (
    <Container>
      <Main />
      <ChooseYourBreakfast />
      <Search />
      <PreviewCategories />
    </Container>
  );
};

export default HomePage;

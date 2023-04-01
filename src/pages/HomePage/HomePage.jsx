import React from 'react';
import { Container } from './HomePage.styled';

import ChooseYourBreakfast from 'components/Main/ChooseYourBreakfast/СhooseYourBreakfast';
import Hero from 'components/Main/Hero/Hero';
import Search from 'components/Main/Search/Search';
import PreviewCategories from 'components/Main/PreviewCategories/PreviewCategories';

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <ChooseYourBreakfast />
      <Search />
      <PreviewCategories />
    </Container>
  );
};

export default HomePage;

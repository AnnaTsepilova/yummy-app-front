import React from 'react';

import Hero from 'components/Main/Hero/Hero';
import Search from 'components/Main/Search/Search';
import PreviewCategories from 'components/Main/PreviewCategories/PreviewCategories';

const MainPage = () => {
  return (
    <>
      <Hero />
      <Search />
      <PreviewCategories />
    </>
  );
};

export default MainPage;

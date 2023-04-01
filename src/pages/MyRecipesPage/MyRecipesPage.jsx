import React from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const MyRecipesPage = () => {
  return (
    <>
      <Header />
      <MyRecipesList></MyRecipesList>
      <Footer />
    </>
  );
};

export default MyRecipesPage;

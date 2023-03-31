import React from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MyRecipesItem from 'components/MyRecipesList/MyRecipesItem/MyRecipesItem';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const MyRecipesPage = () => {
  return (
    <>
      <Header />
      <MyRecipesList>
        <MyRecipesItem></MyRecipesItem>
        <MyRecipesItem></MyRecipesItem>
        <MyRecipesItem></MyRecipesItem>
        <MyRecipesItem></MyRecipesItem>
      </MyRecipesList>
      <Footer />
    </>
  );
};

export default MyRecipesPage;

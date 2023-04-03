import React from 'react';

import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import Header from 'components/Header/Header';
import PageHeader from 'components/PageHeader/PageHeader';

// import { useSelector } from 'react-redux';

const MyRecipesPage = () => {
  // const recipes = useSelector(selectMyRecipes);

  const myRecipes = [
    {
      _id: '640cd5ac2d9fecf12e8897f9',
      title: 'Lamb tomato and sweet spices',
      category: 'Lamb',
      area: 'Moroccan',
      instructions:
        "Use pickled vine leaves here, preserved in brine. Small delicate leaves are better than the large bristly ones but, if only large leaves are to hand, then trim them to roughly 12 by 12 cms so that you don't get too many layers of leaves around the filling.",
      description:
        'A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.',
      thumb:
        'https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg',
      time: '90',
    },
    {
      _id: '640cd5ac2d9fecf12e8897f0',
      title: 'Lamb tomato and sweet spices',
      category: 'Lamb',
      area: 'Moroccan',
      instructions:
        "Use pickled vine leaves here, preserved in brine. Small delicate leaves are better than the large bristly ones but, if only large leaves are to hand, then trim them to roughly 12 by 12 cms so that you don't get too many layers of leaves around the filling.",
      description:
        'A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.',
      thumb:
        'https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg',
      time: '90',
    },
  ];

  return (
    <>
      <Header />
      <PageHeader>My recipes</PageHeader>
      <MyRecipesList items={myRecipes} />
    </>
  );
};

export default MyRecipesPage;

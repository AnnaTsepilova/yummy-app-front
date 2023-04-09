import React from 'react';
import { useState, useEffect} from "react";
// import ReactDOM from 'react-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'
import { SearchBlackBtn } from 'components/Buttons/Buttons';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields'
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe'


import {getPopularRecipe } from 'service/API/dishesApi';
const AddRecipeForm = () => {

  const [popularRecipeList, setPopularRecipeList] = useState([]);

  const [itemTitleRecipe, setItemTitleRecipe] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState({ value: '', label: '' });
  const [cookingTimeRecipe, setCookingTimeRecipe] = useState({ value: '', label: '' })

  const [userIngredientsList, setUserIngredientList] = useState([]);
  
  function initPopularFunc(list) {
    setPopularRecipeList(list);
   };

  useEffect(() => {
    try {
      getPopularRecipe().then(initPopularFunc);
    } catch (error) {
       Notify.failure('Error database connection!', {
            fontSize: '16px',
            width: '350px',
            padding: '10px',
          });
    }

  }, []);
  
  
  const handleIncIngredient = () => {
    const ingredient = {
      _id: nanoid(),
      id: '',
      name: '',
      unit: '',
    }
    setUserIngredientList([ingredient, ...userIngredientsList]);
  }

  const handleDecIngredient = () => { 
    const newIngredientsList = [...userIngredientsList];
    newIngredientsList.shift();
    setUserIngredientList(newIngredientsList);
  };

  const handleOnDeleteContact = (index) => {
    const newIngredientsList = [...userIngredientsList];
    newIngredientsList.splice(index, 1);
    setUserIngredientList(newIngredientsList);
  };

  const handleOnChangeIngName = (e, i) => {
    const tmpList = [...userIngredientsList];
    tmpList[i].id = e.value;
    tmpList[i].name = e.label;
    setUserIngredientList(tmpList);
  };

  const handleOnChangeIngUnit = (e, i) => {
    const tmpList = [...userIngredientsList];
    tmpList[i].unit = e.value;
    setUserIngredientList(tmpList);
  };

  let initialValues = {
    image: '',
    itemTitleRecipe: '',
    aboutRecipe: '',
  }

  const handleOnSubmit = async (values) => {
    setItemTitleRecipe(values.itemTitleRecipe);
    setAboutRecipe(values.aboutRecipe);
    console.log(userIngredientsList);
    console.log(itemTitleRecipe, aboutRecipe, category, cookingTimeRecipe);
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <Form autoComplete="off">
          <RecipeDescriptionFields
            handleOnCategory={setCategory}
            handleOnCookingTimeRecipe={setCookingTimeRecipe} />
          <RecipeIngredientsFields
            userList={{ userIngredientsList }}
            handleIncIngredient={handleIncIngredient}
            handleDecIngredient={handleDecIngredient}
            handleOnDeleteContact={handleOnDeleteContact} 
            handleOnChangeIngName={handleOnChangeIngName}
            handleOnChangeIngUnit={handleOnChangeIngUnit}
          />
          <RecipePreparationFields/>
          <SearchBlackBtn type="submit">Add</SearchBlackBtn>
        </Form>    
      </Formik>
      <PopularRecipe popularRecipeList={popularRecipeList} />
    </>
  )
}

export default AddRecipeForm;

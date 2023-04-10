import React from 'react';
import { useState, useEffect} from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'
import { SearchBlackBtn } from 'components/Buttons/Buttons';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields'
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe'


import {getPopularRecipe, addRecipe } from 'service/API/dishesApi';
const AddRecipeForm = () => {

  const [popularRecipeList, setPopularRecipeList] = useState([]);

  const [itemTitleRecipe, setItemTitleRecipe] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState({ value: '', label: '' });
  const [cookingTimeRecipe, setCookingTimeRecipe] = useState({ value: '', label: '' })
  const [userIngredientsList, setUserIngredientList] = useState([]);
  const [recipePreparation, setRecipePreperation] = useState('');

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
      unitCount: '',
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

  const handleOnChangeUnitCount = (e, i) => {
    const tmpList = [...userIngredientsList];
    tmpList[i].unitCount = e;
    setUserIngredientList(tmpList);
  };

  let initialValues = {
    image: '',
    itemTitleRecipe: '',
    aboutRecipe: '',
  }

  const resetForm = () => {
    setItemTitleRecipe('');
    setAboutRecipe('');
    setCategory({ value: '', label: '' });
    setCookingTimeRecipe({ value: '', label: '' })
    setUserIngredientList([]);
    setRecipePreperation('');
  }

  const handleOnSubmit = async () => {
    const recipeItem = {
      title: itemTitleRecipe,
      description: aboutRecipe,
      category: category.value,
      cockingTime: cookingTimeRecipe.value,
      ingredients: userIngredientsList.map(e => { return { [`${e.id}`]: `${e.unitCount}/${e.unit}` } }),
      preparation: recipePreparation,
    }

    try {
      addRecipe(recipeItem).then(() => {
        Notify.success('Recipe add to database.', {
          fontSize: '16px',
          width: '350px',
          padding: '10px',
        });
        resetForm();
      }
      );
    } catch (error) {
       Notify.failure('Error database connection!', {
            fontSize: '16px',
            width: '350px',
            padding: '10px',
          });
    }
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <Form autoComplete="off">
          <RecipeDescriptionFields
            dataField={{ itemTitleRecipe, aboutRecipe, category, cookingTimeRecipe }}
            handleOnTitleRecipe={setItemTitleRecipe}
            handleOnAboutRecipe={setAboutRecipe}
            handleOnCategory={setCategory}
            handleOnCookingTimeRecipe={setCookingTimeRecipe} />
          <RecipeIngredientsFields
            userList={{ userIngredientsList }}
            handleIncIngredient={handleIncIngredient}
            handleDecIngredient={handleDecIngredient}
            handleOnDeleteContact={handleOnDeleteContact}
            handleOnChangeIngName={handleOnChangeIngName}
            handleOnChangeIngUnit={handleOnChangeIngUnit}
            handleOnChangeUnitCount={handleOnChangeUnitCount}
          />
          <RecipePreparationFields dataField={recipePreparation} handleOnRecipePreperation={setRecipePreperation} />
          <SearchBlackBtn type="submit">Add</SearchBlackBtn>
        </Form>    
      </Formik>
      <PopularRecipe popularRecipeList={popularRecipeList} />
    </>
  )
}

export default AddRecipeForm;

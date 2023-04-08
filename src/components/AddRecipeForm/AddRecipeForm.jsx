import React from 'react';
import { useState, useEffect} from "react";
// import ReactDOM from 'react-dom';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'
import { SearchBlackBtn } from 'components/Buttons/Buttons';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields'
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe'
import { cookingTimeRecipe, listUnits } from './AddRecipeForm.const';

import { getCategoryListAPI, getIngredientsList } from 'service/API/dishesApi';
const AddRecipeForm = () => {
  // const [imgURL, setImgURL] = useState('');
  // const [imgTitle, setImgTitle] = useState('');
  // const [itemAboutRecipe, setItemAboutRecipe] = useState('');
  // const [itemCategories, setItemCategories] = useState('');
  // const [cookingTimeRecipe, setCookingTimeRecipe] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [userIngredientsList, setUserIngredientList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);

  function initCategoryFunc(list) { 
    const newList = list.map(e => { return ({value: `${e}`, label: `${e}`}) })
    setCategoryList(newList);
  };

  function initIngredientFunc(list) { 
    const tmp = list.map(e => {
      return ({ value: e._id, label: `${e.ttl}` })
    });
    setIngredientList(tmp);
  };

  useEffect(() => {
    try {
        getCategoryListAPI().then(list =>initCategoryFunc(list));
        getIngredientsList().then(initIngredientFunc);
    } catch (error) {
      console.log(error);
    }

  }, []);
  


  const handleIncIngredient = () => {
    const ingredient = {
      id: nanoid(),
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

  const handleOndeleteContact = (index) => {
    const newIngredientsList = [...userIngredientsList];
    newIngredientsList.splice(index, 1);
    setUserIngredientList(newIngredientsList);
  };

  let initialValues = {
    srcImg: '',
    itemTitleRecipe: '',
    aboutRecipe: '',
    category: [...categoryList],
    cookingTimeRecipe,
    listUnits,
    userIngredientsList,
    ingredientList
  }

  const handleOnSubmit = async (values) => {
      console.log(values);
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <Form autoComplete="off">
          <RecipeDescriptionFields dataRecipe={initialValues}/>
          <RecipeIngredientsFields dataRecipe={initialValues} handleIncIngredient={handleIncIngredient} handleDecIngredient={handleDecIngredient} handleOndeleteContact={handleOndeleteContact} />
          <RecipePreparationFields/>
          <SearchBlackBtn type="submit">Add</SearchBlackBtn>
        </Form>    
      </Formik>
      <PopularRecipe/>
    </>
  )
}

export default AddRecipeForm;

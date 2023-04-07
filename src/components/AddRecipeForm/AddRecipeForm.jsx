import React from 'react';
import { useEffect, useState} from "react";
// import ReactDOM from 'react-dom';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'
import { SearchBlackBtn } from 'components/Buttons/Buttons';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields'
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe'
import { initCookingTimeRecipe } from './AddRecipeForm.const';

const AddRecipeForm = () => {
  // const [imgURL, setImgURL] = useState('');
  // const [imgTitle, setImgTitle] = useState('');
  // const [itemAboutRecipe, setItemAboutRecipe] = useState('');
  // const [itemCategories, setItemCategories] = useState('');
  // const [cookingTimeRecipe, setCookingTimeRecipe] = useState('');
  const [ingredientsList, setIngredientList] = useState([]);

  const handleIncIngredient = () => {
    const ingredient = {
      id: nanoid(),
      name: '',
      unit: '',
    }
    setIngredientList([ingredient, ...ingredientsList]);
  }

  const handleDecIngredient = () => { 
    const newIngredientsList = [...ingredientsList];
    newIngredientsList.shift();
    setIngredientList(newIngredientsList);
  };

  let initialValues = {
    srcImg: '',
    itemTitleRecipe: '',
    aboutRecipe: '',
    category: [
      { value: 'purple', label: 'Purple' },
      { value: 'red', label: 'Red' },
      { value: 'orange', label: 'Orange' },
      { value: 'yellow', label: 'Yello' },
      { value: 'green', label: 'Green' },
    ],
    initCookingTimeRecipe,
  }

  const handleOnSubmit = async (values) => {
      console.log(values);
  }
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <Form autoComplete="off">
          <RecipeDescriptionFields dataRecipe={initialValues}/>
          <RecipeIngredientsFields ingredientsList={ingredientsList} handleIncIngredient={handleIncIngredient} handleDecIngredient={ handleDecIngredient} />
          <RecipePreparationFields/>
          <SearchBlackBtn type="submit">Add</SearchBlackBtn>
        </Form>    
      </Formik>
      <PopularRecipe/>
    </>
  )
}

export default AddRecipeForm;

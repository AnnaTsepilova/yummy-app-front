import React from 'react'
import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getCategoryListAPI } from 'service/API/dishesApi';
import { listTimeRecipe } from 'components/AddRecipeForm/AddRecipeForm.const';

import { NoImageStyled, ImgLabel, FormWrapper, FieldStyled, SelectStyled, ImageInput } from './RecipeDescriptionFields.styled';

//  import { Field } from 'formik';

const RecipeDescriptionFields = ({ dataField, handleOnTitleRecipe, handleOnAboutRecipe, handleOnCategory, handleOnCookingTimeRecipe } ) => {
  const { itemTitleRecipe, aboutRecipe, category, cookingTimeRecipe } = dataField;
  const [categoryList, setCategoryList] = useState([]);

  function initCategoryFunc(list) { 
    const newList = list.map(e => { return ({value: `${e}`, label: `${e}`}) })
    setCategoryList(newList);
  };

  useEffect(() => {
    try {
      getCategoryListAPI().then(initCategoryFunc);
    } catch (error) {
       Notify.failure('Error database connection!', {
            fontSize: '16px',
            width: '350px',
            padding: '10px',
          });
    }

  }, []);

  return (
    <>
      <FormWrapper>
        <ImgLabel htmlFor="image">
          {/* <ImgStyled/> */}
          <NoImageStyled/>
          <ImageInput
              // id="image"
              name="image"
              type="file"
              onChange={event => {
               console.log(event);
               // formik.setFieldValue('image', event.target.files[0]);
              }}>
          </ImageInput>
        </ImgLabel>
        <FieldStyled
          as="input"
          name="itemTitleRecipe"
          value = {itemTitleRecipe}
          placeholder="Enter item title"
          onChange={e => { handleOnTitleRecipe(e.currentTarget.value) }}
          required
        />
        <FieldStyled
          as="input"
          name="aboutRecipe"
          value = {aboutRecipe}
          placeholder="Enter about recipe"
          onChange={e => { handleOnAboutRecipe(e.currentTarget.value) }}
          required
        />
        <SelectStyled
          options={categoryList}
          isSearchable={false}
          setValue={category}
          placeholder="Category"
          classNamePrefix="react-select"
          onChange={handleOnCategory}
          required
        />
        <SelectStyled
          options={listTimeRecipe}
          isSearchable={false}
          setValue={cookingTimeRecipe}
          placeholder="Cooking time"
          classNamePrefix="react-select"
          onChange={handleOnCookingTimeRecipe}
          required
        />
      </FormWrapper>
    </>
  )
}

export default RecipeDescriptionFields

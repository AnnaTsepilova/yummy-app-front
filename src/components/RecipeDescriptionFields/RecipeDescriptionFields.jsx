import React from 'react'
import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getCategoryListAPI } from 'service/API/dishesApi';
import { cookingTimeRecipe } from 'components/AddRecipeForm/AddRecipeForm.const';

import { NoImageStyled, ImgLabel, FormWrapper, FieldStyled, SelectStyled, ImageInput } from './RecipeDescriptionFields.styled';

//  import { Field } from 'formik';

const RecipeDescriptionFields = ({ handleOnCategory, handleOnCookingTimeRecipe } ) => {
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
        <FieldStyled name="itemTitleRecipe" placeholder="Enter item title"/>
        <FieldStyled name="aboutRecipe" placeholder="Enter about recipe" />
        <SelectStyled
          name="category"
          options={categoryList}
          isSearchable={false}
          placeholder="Category"
          classNamePrefix="react-select"
          onChange={handleOnCategory}
        />
        <SelectStyled
          // defaultValue={colourOptions}
          options={cookingTimeRecipe}
          isSearchable={false}
          placeholder="Cooking time"
          classNamePrefix="react-select"
          onChange={handleOnCookingTimeRecipe}
        />
      </FormWrapper>
    </>
  )
}

export default RecipeDescriptionFields

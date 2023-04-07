import React from 'react'
import { FormWrapper, FieldStyled } from './RecipeDescriptionFields.styled';
import { SelectStyled } from './RecipeDescriptionFields.styled';
import { ImageInput } from './RecipeDescriptionFields.styled';
//  import { Field } from 'formik';

const RecipeDescriptionFields = ({ dataRecipe }  ) => {
  const { srcImg, itemTitleRecipe, aboutRecipe, category, cookingTimeRecipe } = dataRecipe; 

  return (
    <>
      <FormWrapper>
        <ImageInput type="button">
          <img src={srcImg} alt=""/>
        </ImageInput>
        <FieldStyled name="itemTitleRecipe"  placeholder="Enter item title" />
        <FieldStyled name="aboutRecipe" placeholder="Enter about recipe" />
        <SelectStyled
          // defaultValue={colourOptions}
          options={category}
          isSearchable={false}
          placeholder="Category"
          classNamePrefix="react-select"
        />
        <SelectStyled
          // defaultValue={colourOptions}
          options={cookingTimeRecipe}
          isSearchable={false}
          placeholder="Cooking time"
          classNamePrefix="react-select"
        />
      </FormWrapper>
    </>
  )
}

export default RecipeDescriptionFields

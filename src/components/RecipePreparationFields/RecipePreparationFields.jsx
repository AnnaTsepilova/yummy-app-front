import React from 'react'
import { FormWrapper, TitleStyled, TextAreaStyled } from './RecipePreparationFields.styled'
const RecipePreparationFields = () => {
  return (
    <>
      <FormWrapper>
        <TitleStyled>Recipe Preparation</TitleStyled>
        <TextAreaStyled rows="20" cols="45" name="text"></TextAreaStyled>
      </FormWrapper>

    </>
  )
}

export default RecipePreparationFields

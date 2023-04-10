import React from 'react'
import { FormWrapper, TitleStyled, TextAreaStyled } from './RecipePreparationFields.styled'
const RecipePreparationFields = ({ dataField, handleOnRecipePreperation }) => {
  return (
    <>
      <FormWrapper>
        <TitleStyled>Recipe Preparation</TitleStyled>
        <TextAreaStyled
          as="textarea"
          name="text"
          value={dataField}
          onChange={e => { handleOnRecipePreperation(e.currentTarget.value) }}
          required
        />
      </FormWrapper>
    </>
  )
}

export default RecipePreparationFields

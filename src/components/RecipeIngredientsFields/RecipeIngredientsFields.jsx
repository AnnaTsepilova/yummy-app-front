import React from 'react'
import { DeleteButton, InputIngredWraper, TitleWraper, FormWrapper, TitleStyled, IncDecWraper, IncDecButton, IncDecCounter, SelectIngredStyled, SelectIngredUnit } from './RecipeIngredientsFields.styled'

const RecipeIngredientsFields = ({dataIngredient}) => {
  const { category} = dataIngredient; 

  const handleOnInc = async () => {
    console.log("+");
  }
  const handleOnDec = async () => { 
     console.log("-");   
  }
  const handleOnDelete = async () => { 
    console.log("Press Delete");
  }
  return (

    <>
      <FormWrapper>
        <TitleWraper>
              <TitleStyled>Ingredients</TitleStyled>
              <IncDecWraper>
                <IncDecButton type='button'onClick={handleOnDec}>-</IncDecButton>
                <IncDecCounter>0</IncDecCounter>
                <IncDecButton type='button' onClick={handleOnInc}>+</IncDecButton>
              </IncDecWraper>
        </TitleWraper>  
        <InputIngredWraper>
              <SelectIngredStyled
                // defaultValue={colourOptions}
                options={category}
                isSearchable={false}
                // placeholder="Category"
                classNamePrefix="react-select"
              />
              <SelectIngredUnit
                // defaultValue={colourOptions}
                options={category}
                isSearchable={false}
                // placeholder="Category"
                classNamePrefix="react-select"
              />
          <DeleteButton onClick={handleOnDelete}>X</DeleteButton>
        </InputIngredWraper>

      </FormWrapper>
    </>
  )
}

export default RecipeIngredientsFields

import React from 'react'
import { ListIngredientsItem, DeleteButton, InputIngredWraper, TitleWraper, FormWrapper, TitleStyled, IncDecWraper, IncDecButton, IncDecCounter, SelectIngredStyled, SelectIngredUnit } from './RecipeIngredientsFields.styled'

const RecipeIngredientsFields = ({ingredientsList, handleIncIngredient, handleDecIngredient}) => {
  // const { category} = dataIngredient; 


  const handleOnDelete = async () => { 
    console.log("Press Delete");
  }
  return (

    <>
      <FormWrapper>
        <TitleWraper>
              <TitleStyled>Ingredients</TitleStyled>
              <IncDecWraper>
                <IncDecButton type='button'onClick={handleDecIngredient}>-</IncDecButton>
            <IncDecCounter>{ ingredientsList.length}</IncDecCounter>
                <IncDecButton type='button' onClick={handleIncIngredient}>+</IncDecButton>
              </IncDecWraper>
        </TitleWraper>  
          <ul>
            {ingredientsList.map((e, index) => {
              return (
                <ListIngredientsItem key={e.id}>
                    <InputIngredWraper>
                          <SelectIngredStyled
                            // defaultValue={colourOptions}
                            // options={category}
                            isSearchable={false}
                            // placeholder="Category"
                            classNamePrefix="react-select"
                          />
                          <SelectIngredUnit
                            // defaultValue={colourOptions}
                            // options={category}
                            isSearchable={false}
                            // placeholder="Category"
                            classNamePrefix="react-select"
                          />
                     <DeleteButton onClick={handleOnDelete}>X</DeleteButton>
                    </InputIngredWraper>
                </ListIngredientsItem>
              )
            })}
          </ul>


      </FormWrapper>
    </>
  )
}

export default RecipeIngredientsFields

import React from 'react'
import { CloseIconButton, IncIconButton, DecrIconButton,ListIngredientsItem, DeleteButton, InputIngredWraper, TitleWraper, FormWrapper, TitleStyled, IncDecWraper, IncDecButton, IncDecCounter, SelectIngredStyled, SelectIngredUnit } from './RecipeIngredientsFields.styled'

const RecipeIngredientsFields = ({dataRecipe, handleIncIngredient, handleDecIngredient, handleOndeleteContact}) => {
  const {ingredientList, userIngredientsList, listUnits } = dataRecipe;

  return (
    <>
      <FormWrapper>
        <TitleWraper>
              <TitleStyled>Ingredients</TitleStyled>
          <IncDecWraper>

              <IncDecButton type='button' onClick={handleDecIngredient}>
                  <DecrIconButton/>
              </IncDecButton>
              <IncDecCounter>{ userIngredientsList.length}</IncDecCounter>
              <IncDecButton type='button' onClick={handleIncIngredient}>
                  <IncIconButton/>
              </IncDecButton>
          </IncDecWraper>
        </TitleWraper>  
          <ul>
            {userIngredientsList.map((e, index) => {
              return (
                <ListIngredientsItem key={e.id}>
                    <InputIngredWraper>
                          <SelectIngredStyled
                            // defaultValue={colourOptions}
                            options={ingredientList}
                            isSearchable={true}
                            classNamePrefix="react-select"
                          />
                          <SelectIngredUnit
                            // defaultValue={colourOptions}
                            options={listUnits}
                            isSearchable={false}
                            classNamePrefix="react-select"
                          />
                    <DeleteButton onClick={handleOndeleteContact}>
                          <CloseIconButton/>
                    </DeleteButton>
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

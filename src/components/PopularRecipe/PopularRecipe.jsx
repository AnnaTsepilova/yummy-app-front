import React from 'react'
import { DescriptionWraper, RecipeDescription, RecipeHeader, PopularRecipeItem, ImgStyled, FormWrapper, TitleStyled } from './PopularRecipe.style'
const PopularRecipe = ({ popularRecipeList }) => {
  return (
    <>
      <FormWrapper>
        <TitleStyled>Popular recipe</TitleStyled>
        <ul>
          {popularRecipeList.map((e, index) => {
            return (
              <PopularRecipeItem key={e._id}>
                <ImgStyled src={e.preview} alt={e.title} />
                  <DescriptionWraper>
                  <RecipeHeader>{ e.title}</RecipeHeader>
                    <RecipeDescription>{ e.description }</RecipeDescription>
                  </DescriptionWraper>
                </PopularRecipeItem>
            )
          })}
        </ul>
      </FormWrapper>
    </>
  )
}

export default PopularRecipe

import React from 'react'
import { DescriptionWraper, RecipeDescription, RecipeHeader, PopularRecipeItem, ImgStyled, FormWrapper, TitleStyled } from './PopularRecipe.style'
const PopularRecipe = () => {
  const descr = "In a bowl, mash the banana with a fork until it resembles a thick purée...";
  return (
    <>
      <FormWrapper>
        <TitleStyled>Popular recipe</TitleStyled>
        <PopularRecipeItem>
          <ImgStyled src="" alt="" />
          <DescriptionWraper>
            <RecipeHeader>Banana Pancakes</RecipeHeader>
            <RecipeDescription>{ descr }</RecipeDescription>
          </DescriptionWraper>
        </PopularRecipeItem>
      </FormWrapper>
    </>
  )
}

export default PopularRecipe

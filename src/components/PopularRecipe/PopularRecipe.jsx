import React from 'react'
import { useState, useEffect} from "react";
import { RecipeBox,DescriptionWraper, RecipeDescription, RecipeHeader, PopularRecipeItem, ImgStyled, FormWrapper, TitleStyled } from './PopularRecipe.style'

const PopularRecipe = ({ popularRecipeList }) => {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  useEffect(() => {
    window.onresize = () => { setWindowWidth(window.screen.width) };
      return () => {window.onresize = false};
  }, [windowWidth]);
  
  return (
    <>
      <FormWrapper>
        <TitleStyled>Popular recipe</TitleStyled>
        <RecipeBox>
          {popularRecipeList.map((e, index) => {
            if (windowWidth < 1440 && windowWidth > 768 && index > 1) return(<div key={e._id}></div>);
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
        </RecipeBox>
      </FormWrapper>
    </>
  )
}

export default PopularRecipe

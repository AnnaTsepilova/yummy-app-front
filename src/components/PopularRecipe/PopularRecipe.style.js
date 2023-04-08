import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 343px;
  /* display: flex;
  flex-direction: column; */
  margin-top: 72px;
  margin-bottom: 100px;
`;

export const TitleStyled = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
`;

export const PopularRecipeItem = styled.div`
  width: 343px;
  display: flex;
  margin-bottom: 24px;
`;

export const ImgStyled = styled.img`
  width: 104px;
  height: 85px;
  border-radius: 8px;
  margin-right: 12px;
  border: 1px solid black;
`;

export const DescriptionWraper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeHeader = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  letter-spacing: -0.24px;
  color: #3e4462;
`;

export const RecipeDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #7e7e7e;
`;

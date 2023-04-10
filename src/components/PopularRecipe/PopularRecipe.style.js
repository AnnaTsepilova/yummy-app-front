import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 343px;
  height: 464px;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 162px;
  }
  @media screen and (min-width: 1440px) {
    width: 319px;
    height: 528px;
  }
`;

export const RecipeBox = styled.ul`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const TitleStyled = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PopularRecipeItem = styled.div`
  width: 343px;
  height: 98px;
  display: flex;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.17);
  padding-bottom: 13px;
  @media screen and (min-width: 768px) {
    width: 336px;
    margin-bottom: 40px;
  }
`;

export const ImgStyled = styled.img`
  width: 104px;
  height: 85px;
  border-radius: 8px;
  margin-right: 12px;
  border: none;
  @media screen and (min-width: 1440px) {
    width: 97px;
    height: 85px;
  }
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

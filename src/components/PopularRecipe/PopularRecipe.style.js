import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 343px;
  height: auto;

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
  margin-bottom: 32px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--primary-gray);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PopularRecipeItem = styled.li`
  display: flex;
  padding-bottom: 13px;

  width: 343px;
  height: auto;

  /* border-bottom: 1px solid rgba(112, 112, 112, 0.17); */

  &:not(:first-child) {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    &:not(:first-child) {
      margin-top: 0px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
    &:not(:first-child) {
      margin-top: 24px;
    }
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  padding-bottom: 13px;

  width: 343px;
  height: auto;

  border-bottom: 1px solid rgba(112, 112, 112, 0.17);

  &:not(:first-child) {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    &:not(:first-child) {
      margin-top: 0px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
    &:not(:first-child) {
      margin-top: 24px;
    }
  }
`;

export const ImgStyled = styled.img`
  margin-right: 12px;
  object-fit: cover;
  width: 104px;
  height: 85px;

  border-radius: 8px;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: var(--primary-gray);
`;

export const RecipeDescription = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: var(--secondary-gray);
`;

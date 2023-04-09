import styled from 'styled-components';

import { ListItem } from 'components/RecipeInngredientsList/RecipeInngredientsList.styled';
import CloseIcon from 'images/AddRecipe/close.svg';

export const ListItemSL = styled(ListItem)`
  min-height: 84px;

  align-items: flex-start;

  padding: 0 19px 30px 0;

  background-color: var(--primary-white);
  border-bottom: 1px solid var(--lineColor);
  border-radius: 0;

  &:not(:first-child) {
    margin-top: 24px;
  }

  @media screen and (min-width: 768px) {
    &:not(:first-child) {
      margin-top: 44px;
    }
    padding: 0 45px 50px 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1160px;
    padding: 0 28px 50px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: start;
`;

export const Button = styled.button`
  width: 14px;
  height: 14px;

  background-image: url('${CloseIcon}');
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;

  background-color: transparent;
  border: none;
  margin-left: 46px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 120px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 174px;
  }
`;

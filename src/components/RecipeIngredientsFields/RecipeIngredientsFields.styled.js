import styled from 'styled-components';
import Select from 'react-select';
// import { Field } from 'formik';
import { ReactComponent as DecreaseIcon } from 'images/AddRecipe/decrease.svg';
import { ReactComponent as IncreaseIcon } from 'images/AddRecipe/increase.svg';
import { ReactComponent as CloseIcon } from 'images/AddRecipe/close.svg';

export const FormWrapper = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 44px;
`;

export const TitleWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListIngredientsItem = styled.li`
  display: flex;
`;

export const InputIngredWraper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

export const DecrIconButton = styled(DecreaseIcon)`
  width: 14px;
  height: 14px;
`;

export const IncIconButton = styled(IncreaseIcon)`
  width: 14px;
  height: 14px;
`;

export const CloseIconButton = styled(CloseIcon)`
  width: 18px;
  height: 18px;
`;

export const DeleteButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TitleStyled = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
`;

export const IncDecWraper = styled.div`
  width: 92px;
  height: 28px;
  display: flex;
  /* background: #d9d9d9; */
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
`;

export const IncDecButton = styled.button`
  width: 14px;
  height: 14px;
  /* padding: 14px 7px 14px 7px; */
  border: none;
  color: #8baa36;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const IncDecCounter = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #333333;
`;

export const SelectIngredStyled = styled(Select)`
  & .react-select__control {
    background-color: #d9d9d9;
    /* border: 1px solid #f0f0f0; */
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 6px;
    width: 194px;
    height: 53px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.02em;
    color: #fafafa;
    margin-right: 14px;

    &--is-focused,
    &--menu-is-open {
      outline: none;
      border: 1px solid transparent;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 0 1px transparent;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
      /* width: 175px; */
      height: 41px;
    }
  }

  & .react-select__single-value {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.02em;
    /* color: #fafafa; */
  }

  & .react-select__value-container {
    color: rgba(0, 0, 0, 0.5);
  }

  & .react-select-container {
    box-shadow: none;
    outline: none;
    border-color: transparent;

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 0 1px transparent;
    }
  }

  & .react-select__menu-list {
    background-color: transparent;
    border-radius: 0px 0px 6px 6px;

    line-height: -0.02em;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 14px;
    }

    color: rgba(0, 0, 0, 0.5) !important;
  }

  & .react-select__option {
    background-color: #fafafa;
    color: rgba(0, 0, 0, 0.5);
  }

  & .react-select__dropdown-indicator {
    /* color: #8baa36; */
    display: none;
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__menu {
    margin: 0;
    border-radius: 0px 0px 6px 6px;
  }

  & .react-select__placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const SelectIngredUnit = styled(Select)`
  & .react-select__control {
    background-color: #d9d9d9;
    /* border: 1px solid #d9d9d9; */
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 6px;
    width: 84px;
    height: 53px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.02em;
    color: #fafafa;
    margin-right: 14px;

    &--is-focused,
    &--menu-is-open {
      outline: none;
      border: 1px solid transparent;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 0 1px transparent;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
      /* width: 175px; */
      height: 41px;
    }
  }

  & .react-select__single-value {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.02em;
    /* color: #fafafa; */
  }

  & .react-select__value-container {
    color: rgba(0, 0, 0, 0.5);
  }

  & .react-select-container {
    box-shadow: none;
    outline: none;
    border-color: transparent;

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 0 1px transparent;
    }
  }

  & .react-select__menu-list {
    background-color: transparent;
    border-radius: 0px 0px 6px 6px;

    line-height: -0.02em;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 14px;
    }

    color: rgba(0, 0, 0, 0.5) !important;
  }

  & .react-select__option {
    background-color: #fafafa;
    color: rgba(0, 0, 0, 0.5);
  }

  & .react-select__dropdown-indicator {
    color: #8baa36;
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__menu {
    margin: 0;
    border-radius: 0px 0px 6px 6px;
  }

  & .react-select__placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
`;

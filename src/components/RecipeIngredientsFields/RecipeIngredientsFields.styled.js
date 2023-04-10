import styled from 'styled-components';
import Select from 'react-select';
// import { Field } from 'formik';
import { ReactComponent as DecreaseIcon } from 'images/AddRecipe/decrease.svg';
import { ReactComponent as IncreaseIcon } from 'images/AddRecipe/increase.svg';
import { ReactComponent as CloseIcon } from 'images/AddRecipe/close.svg';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const TitleWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const WrapperFieldsInput = styled.div`
  display: flex;
`;

export const ListIngredientsItem = styled.li`
  display: flex;
  margin-bottom: 18px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const DecrIconButton = styled(DecreaseIcon)`
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const IncIconButton = styled(IncreaseIcon)`
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const CloseIconButton = styled(CloseIcon)`
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const DeleteButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const TitleStyled = styled.h3`
  font-style: normal;
  color: #3e4462;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
`;

export const IncDecWraper = styled.div`
  width: 92px;
  height: 28px;
  display: flex;

  border: 1px solid #e0e0e0;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 110px;
    height: 32px;
  }
`;

export const IncDecButton = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  color: #8baa36;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
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
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SelectIngredStyled = styled(Select)`
  & .react-select__control {
    background: #f5f5f5;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #fafafa;
    width: 194px;
    height: 59px;
    border-radius: 6px;
    margin-right: 14px;
    @media (min-width: 768px) {
      font-size: 18px;
      width: 398px;
      height: 59px;
      margin-right: 32px;
    }
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
  }

  & .react-select__single-value {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    @media (min-width: 768px) {
      font-size: 18px;
    }
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
    height: 170px;
    background-color: transparent;
    border-radius: 0px 0px 6px 6px;
    font-size: 12px;
    line-height: 1;
    letter-spacing: -0.02em;
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
    display: none;
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__menu {
    width: 194px;
    margin: 0;
    border-radius: 0px 0px 6px 6px;
    @media (min-width: 768px) {
      width: 389px;
    }
  }

  & .react-select__placeholder {
    display: none;
  }
`;

export const UnitWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border-radius: 6px;
  /* margin-right: 14px; */
`;

export const UnitCount = styled.input`
  width: 25px;
  height: 53px;
  font-size: 14px;
  border: none;
  background: #f5f5f5;
  text-align: right;
  @media (min-width: 768px) {
    width: 32px;
    font-size: 18px;
    height: 59px;
  }
`;

export const SelectIngredUnit = styled(Select)`
  & .react-select__control {
    background-color: #f5f5f5;

    border: none;
    outline: none;
    box-shadow: none;
    width: 80px;
    height: 53px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;

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
      font-size: 18px;
      height: 59px;
    }
  }

  & .react-select__single-value {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    @media (min-width: 768px) {
      width: 29px;
      font-size: 18px;
    }
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
    font-size: 12px;
    line-height: -0.02em;
    text-align: center;

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
    display: none;
  }
`;

import styled from 'styled-components';
import Select from 'react-select';
import { Field } from 'formik';
import { ReactComponent as NoImage } from 'images/AddRecipe/img-input.svg';

export const NoImageStyled = styled(NoImage)`
  margin: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
  }
`;

export const WrapperFieldsInput = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  width: 343px;

  @media screen and (min-width: 768px) {
    width: 393px;
    margin-left: 0px;
    margin-right: 0px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
  }
`;

export const ImgLabel = styled.label`
  display: flex;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;

  width: 279px;
  height: 268px;

  background: var(--primary-green);
  border-radius: 8px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    margin-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
    margin-right: 50px;
  }
`;

export const ImgStyled = styled.img`
  width: 279px;
  height: 268px;
  border-radius: 8px;
  /* background: #8baa36; */
`;

export const ImageInput = styled.button`
  /* width: 279px;
  height: 268px; */
  /* border: solid 1px black; */
  /* align-self: center; */
  /* position: absolute; */
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`;

export const FieldStyled = styled(Field)`
  max-width: auto;
  margin-bottom: 24px;
  padding: 0 0 18px 0;

  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 1);

  border: none;
  border-bottom: 1px solid var(--lineColor);
  background-color: var(--primary-white);

  &:focus,
  &:active,
  &:hover,
  &::selection {
    outline: none;
    //border-color: transparent;
    //box-shadow: 0 0 0 1px transparent;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const WrapperSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;

  border-bottom: 1px solid var(--lineColor);

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const LabelSelectStyled = styled.label`
  padding-bottom: 18px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--black);
  opacity: 0.5;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SelectStyled = styled(Select)`
  & .react-select__control {
    width: 123px;
    height: 25px;

    border: none;
    /* border-bottom: 1px solid #e0e0e0; */
    outline: none;
    box-shadow: none;
    background-color: var(--primary-white);

    &--is-focused,
    &--menu-is-open {
      outline: none;
      //border: 1px solid transparent;
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      //box-shadow: 0 0 0 1px transparent;
    }
  }

  // стилизует инпут выпадающего списка ================
  & .react-select__single-value {
    // стилизует текст ================
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    text-align: right;
    letter-spacing: -0.02em;
    color: var(--black);

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  & .react-select__value-container {
    // стилизует контейнер ================
    margin-right: 8px;
    padding: 0 0 16px 0;

    @media (min-width: 768px) {
      padding: 0 0 24px 0;
    }
  }
  // =========================================

  & .react-select-container {
    box-shadow: none;
    outline: none;
    border-color: transparent;
    // box-shadow: none;

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      //box-shadow: 0 0 0 1px transparent;
    }
  }
  // стилизует выпадающий список ================
  & .react-select__menu-list {
    margin-top: 0;
    padding: 0;

    height: 140px;

    text-align: left;

    border-radius: 6px;

    @media (min-width: 768px) {
      margin-left: -8px;
      //width: 130px;
      height: 170px;
    }
  }

  & .react-select__menu {
    margin-top: -15px;
    padding: 2px 0 8px 8px;

    width: 123px;

    border-radius: 6px;
    background-color: var(--white);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);

    @media (min-width: 768px) {
      width: 132px;
      //height: 173px;
    }
  }

  // стилизует опции внутри списка ================
  & .react-select__option {
    margin-bottom: -12px;

    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.5);

    background-color: var(--white);

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
  // =========================================

  // стилизует стрелочку выпадающего списка ================
  & .react-select__indicators {
    height: 20px;
    padding: 0;

    @media (min-width: 768px) {
      height: 15px;
    }
  }

  & .react-select__dropdown-indicator {
    padding: 0;
    color: var(--primary-green);
    outline: none;
    &:focus,
    &:active,
    &:hover,
    &::selection {
      padding: 0;
      color: var(--primary-green);
      outline: none;
    }
  }

  // =========================================

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__placeholder {
    display: none;
  }
`;

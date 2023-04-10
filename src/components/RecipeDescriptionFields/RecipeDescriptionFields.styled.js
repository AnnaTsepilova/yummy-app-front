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
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const WrapperFieldsInput = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 343px;
  @media screen and (min-width: 768px) {
    width: 393px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const ImgLabel = styled.label`
  margin-left: auto;
  margin-right: auto;
  width: 279px;
  height: 268px;
  display: flex;
  background: #8baa36;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 32px;

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
  height: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
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
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const LabelSelectStyled = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SelectStyled = styled(Select)`
  & .react-select__control {
    border: none;
    /* border-bottom: 1px solid #e0e0e0; */
    outline: none;
    box-shadow: none;
    width: 123px;
    height: 40px;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #fafafa;

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
      font-size: 16px;
      height: 43px;
    }
  }

  & .react-select__single-value {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    letter-spacing: -0.02em;
    @media (min-width: 768px) {
      font-size: 16px;
      height: 43px;
      text-align: center;
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
    width: 123px;
    height: 180px;
    font-size: 12px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 14px;
      height: 185px;
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

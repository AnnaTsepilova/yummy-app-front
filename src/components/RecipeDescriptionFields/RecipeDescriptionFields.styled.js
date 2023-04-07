import styled from 'styled-components';
import Select from 'react-select';
import { Field } from 'formik';

export const FormWrapper = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 44px;
`;

export const ImageInput = styled.button`
  width: 279px;
  height: 268px;
  border: solid 1px black;
  align-self: center;
`;

export const FieldStyled = styled(Field)`
  width: 343px;
  height: 40px;
  font-size: 14px;
  border: none;
  background: #ececec;
  border-bottom: solid 1px; ;
`;

export const SelectStyled = styled(Select)`
  & .react-select__control {
    background-color: rgba(217, 217, 217, 0.2);
    border: 1px solid #f0f0f0;
    outline: none;
    box-shadow: none;
    border-radius: 6px;
    width: 343px;
    height: 40px;
    font-size: 14px;
    line-height: 1;
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
      font-size: 14px;
      line-height: 21px;
      /* width: 175px; */
      height: 41px;
    }
  }

  & .react-select__single-value {
    font-family: Poppins, sans-serif;
    font-weight: [400, 500, 600, 700];
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

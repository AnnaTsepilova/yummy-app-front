import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(70%, -50%);
  display: flex;
  flex-direction: column;

`;

export const FormWrapper = styled.div`
  width: 335px;
  min-height: 315px;
  padding: 32px 28px 40px 28px;
  background: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media screen and (max-width: 1439px) {
    font-family: 'Poppins';
  }

  @media screen and (max-width: 767px) {
    font-family: 'Poppins';
  }
`;

export const FormTitle = styled.h2`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #fafafa;
  margin-bottom: 18px;

  @media screen and (max-width: 767px) {
    font-family: 'Poppins';
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  &.signin {
    margin-top: 43px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 279px;
  height: 45px;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #fafafa;
  outline: none;
  font-family: 'Poppins';
  font-size: 18px;
  color: #fafafa;
  caret-color: #fafafa;
  display: inline-block;
  box-sizing: border-box;
  transition: border 250ms ease;

  :hover {
    border: 2px solid #fff;
  }

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    width: 18px;
    height: 18px;
    background-image: url(${props => props.iconUrl});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 767px) {
    font-family: 'Poppins';
  }
`;

export const FormInput = styled.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  margin-left: -12px;
  padding: 12px 0 12px 40px;
  border-radius: 6px;
  border: none;
  background-color: transparent;
  outline: none;
  font-family: 'Poppins';
  font-size: 14px;
  color: #fafafa;
  caret-color: #fafafa;

  ::placeholder {
    margin-left: 40px;
    font-family: 'Poppins';
    font-size: 14px;
    color: #fafafa;
    opacity: 0.8;
    letter-spacing: -0.02em;
  }

  @media screen and (max-width: 767px) {
    font-family: 'Poppins';
  }
`;

export const FormButton = styled.button`
  margin-top: 16px;
  padding: 12px 106px;
  background: #8BAA36;
  border-radius: 6px;
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 1.12;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FAFAFA;
  flex: none;
  order: 0;
  outline: none;
  border: 0;
  flex-grow: 0;
  cursor: pointer;

  &:hover {
    font-family: 'Poppins';
  }

  @media screen and (max-width: 767px) {
    font-family: 'Poppins';
  }
`;

export const FormSwitch = styled.div`
  margin-top: 18px;
  text-align: center;
`;

export const FormLink = styled(NavLink)`
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #FAFAFA;

  &.active {
    font-family: 'Poppins';
  }

  @media screen and (max-width: 767px) {
    font-family: 'Poppins';
  }
`;

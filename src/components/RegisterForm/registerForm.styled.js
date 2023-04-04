import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.div`
  margin-top: -32px;

  @media screen and (min-width: 768px) {
    margin-top: -24px;
  }
  /* @media screen and (min-width: 1440px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(70%, -50%);
    display: flex;
    flex-direction: column;
  } */
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 315px;
  padding: 32px 28px 40px 28px;
  background: var(--modal-background);
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    min-height: 419px;
    padding: 44px 50px;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 18px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: var(--primary-white);

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 28px;
    line-height: 1.07;
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

  width: 100%;
  height: 45px;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--primary-white);
  outline: none;
  font-family: 'Poppins';
  font-size: 18px;
  color: var(--primary-white);
  caret-color: var(--primary-white);
  display: inline-block;
  box-sizing: border-box;
  transition: border 250ms ease;

  :hover,
  :active {
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

  /* @media screen and (min-width: 375px) {
    width: 279px;
  } */

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

  background-color: transparent;
  border-radius: 6px;
  border: none;
  outline: none;

  font-size: 14px;
  color: var(--primary-white);
  caret-color: var(--primary-white);

  ::placeholder {
    margin-left: 40px;
    font-family: 'Poppins';
    font-size: 14px;
    color: var(--primary-white);
    opacity: 0.8;
    letter-spacing: -0.02em;
  }

  @media screen and (max-width: 767px) {
    font-family: 'Poppins';
  }
`;

export const FormButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 12px 24px;

  background: var(--primary-green);
  border-radius: 6px;
  outline: none;
  border: 0;

  font-size: 16px;
  line-height: 1.12;
  color: var(--primary-white);
  text-align: center;

  /* flex: none;
  order: 0;
  flex-grow: 0; */

  cursor: pointer;

  &:hover {
    color: var(--secondary-black);
  }

  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }
`;

export const FormSwitch = styled.div`
  margin-top: 18px;
  text-align: center;
`;

export const FormLink = styled(NavLink)`
  font-size: 14px;
  line-height: 1.5;
  text-decoration-line: underline;
  color: var(--primary-white);

  &.active {
    // font-family: 'Poppins';
  }

  &:hover {
    color: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

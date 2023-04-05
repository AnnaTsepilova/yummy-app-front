
import styled from 'styled-components';
import iconMail from '../../images/Subscribe/icon-mail-sub-mob.svg';

const formInputStyles = `
  font-family: 'Poppins';
  font-size: 14px;
  color: #fafafa;
  caret-color: #fafafa;
  outline: none;
  ::placeholder {
    font-family: 'Poppins';
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #FAFAFA;
  }
  @media screen and (max-width: 767px) {
    font-family: 'Poppins';
  }
`;

export const FormWrapper = styled.div`
  /* margin-top: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #22252A; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    align-items: normal;
    margin-top: 72px;
    padding: 0;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 0;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  border: 1px solid var(--primary-white);
  border-radius: 6px;
  width: 204px;
  height: 38px;
  margin-bottom: 8px;
  font-family: 'Poppins';
  padding: 12px;
  font-size: 10px;
  color: var(--primary-white);
  caret-color: var(--primary-white);
  transition: border 250ms ease;
  :hover {
    border: 2px solid var(--white);
  }
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
    width: 16px;
    height: 12px;
    background-image: url(${iconMail});
    background-size: contain;
    background-repeat: no-repeat;
  }
  ${formInputStyles}

  @media only screen and (min-width: 768px) {
    height: 50px;
    width: 259px;
    margin: 0;
  }

  @media only screen and (min-width: 1440px) {
    height: 59px;
    width: 338px;
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  margin-left: -12px;
  padding: 12px 0 12px 42px;
  border-radius: 6px;
  border: none;
  background-color: transparent;
  ${formInputStyles}
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 204px;
  height: 38px;
  background: var(--primary-green);
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.14;
  text-align: center;
  color: var(--primary-white);
  transition: color 250ms ease;

  &:hover {
    color: var(--secondary-black);
  }

  @media only screen and (min-width: 768px) {
    height: 50px;
    width: 171px;

    font-size: 16px;
    line-height: 1.12;
  }

  @media only screen and (min-width: 1440px) {
    height: 60px;
    width: 339px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

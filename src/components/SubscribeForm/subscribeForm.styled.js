import styled from 'styled-components';

const formInputStyles = `
  font-family: 'Poppins';
  font-size: 10px;
  color: var(--primary-white);
  caret-color: var(--primary-white);
  outline: none;

  &::placeholder {
    font-family: 'Poppins';
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: var(--primary-white);
  }

  @media (min-width: 768px) {
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const FormWrapper = styled.div`
  margin: 32px auto 0;

  @media (min-width: 768px) {
    margin-top: 72px;
  }

  @media (min-width: 1440px) {
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  ${'' /* gap: 8px; */}

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    ${'' /* gap: 12px; */}
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: center;
    ${'' /* gap: 0; */}
  }
`;

export const InputWrap = styled.div`
  position: relative;
  border: 1px solid
    ${props =>
      props.correct
        ? '#3CBC81'
        : props.error
        ? '#E74A3B'
        : 'rgba(250, 250, 250, 0.3)'};
  border-radius: 6px;
  width: 204px;
  height: 38px;
  /* padding: 12px; */
  margin-bottom: 8px;
  transition: border 250ms var(--transition-function);

  &:hover {
    border: 1px solid var(--white);
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    right: 19px;
    background-image: ${props =>
      props.error
        ? `url(${props.iconError})`
        : props.warning
        ? `url(${props.iconWarning})`
        : props.correct
        ? `url(${props.iconCorrect})`
        : ''};
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
    width: 16px;
    height: 12px;
    background-image: url(${props =>
      props.correct
        ? props.iconTabUrlG
        : props.error
        ? props.iconTabUrlE
        : props.iconUrl});
    background-size: contain;
    background-repeat: no-repeat;

    @media only screen and (min-width: 768px) {
      width: 20px;
      height: 16px;
      margin-bottom: 0;
    }
  }

  ${formInputStyles}

  @media (min-width: 768px) {
    height: 50px;
    width: 259px;
    margin: 0;
    margin-right: 12px;

    &::before {
      left: 15px;
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 1440px) {
    height: 59px;
    width: 338px;
    margin-bottom: 16px;
    margin-right: 0px;

    &::before {
      left: 16px;
      width: 25px;
      height: 25px;
    }
  }
`;

export const Input = styled.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  padding: 12px 10px 12px 42px;
  margin-left: -12px;
  border-radius: 6px;
  border: none;
  background: transparent;

  @media only screen and (min-width: 768px) {
    padding-left: 53px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 60px;
  }

  ${formInputStyles}

  ::placeholder {
    font-size: 10px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--primary-white);

    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 204px;
  height: 38px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.14;
  text-align: center;
  color: var(--primary-white);
  background-color: var(--primary-green);

  transition: color 250ms var(--transition-function);

  &:hover {
    color: var(--secondary-black);
  }

  @media (min-width: 768px) {
    height: 50px;
    width: 171px;
    font-size: 16px;
    line-height: 1.12;
  }

  @media (min-width: 1440px) {
    height: 60px;
    width: 339px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const Error = styled.div`
  font-size: 10px;
  color: #e74a3b;
  position: relative;
  left: 0;
  bottom: 40%;

  @media (min-width: 768px) {
    font-size: 14px;
    bottom: -110%;
  }
  @media (min-width: 1440px) {
    bottom: 40%;
  }
`;

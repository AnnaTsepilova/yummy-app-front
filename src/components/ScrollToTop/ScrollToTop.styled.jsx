import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  right: 10px;
  bottom: 20px;

  width: 40px;
  height: 40px;

  border-radius: 40%;
  background-color: var(--primary-green);
  border: 1px solid rgba(255, 255, 255, 0.4);

  font-size: 14px;
  line-height: 1.12;

  color: var(--primary-white);

  outline: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: background-color var(--transition-function);

  &:hover {
    background-color: #22252a;
  }
`;

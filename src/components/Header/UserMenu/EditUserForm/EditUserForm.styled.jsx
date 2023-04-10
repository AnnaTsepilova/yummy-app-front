import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  top: 68px;
  right: 60px;
  width: 161px;
  height: 130px;
  background-color: #ffffff;
  border: 1px solid var(--primary-green);
  border-radius: 8px;
  animation-name: slide-down;
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes slide-down {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 16px;
    top: 82px;
    right: 158px;
    width: 177px;
    height: 134px;
    border: none;
    .btnWrp {
      width: 141px;
    }
    .editBtn {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 18px;
    top: 77px;
    right: 223px;
  }
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 23px;
  border: none;
  background-color: transparent;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: var(--primary-black);
  line-height: 1.6;
  cursor: pointer;

  transition: color 250ms var(--transition-function);

  svg path {
    stroke: var(--primary-black);
  }
  &:hover {
    color: var(--primary-green);
  }
`;

export const EditSpan = styled.span`
  color: inherit;
`;

export const LogoutButton = styled.div`
  width: 125px;
  font-weight: 400;
  height: 43px;
  font-size: 14px;
  line-height: 1.5;
`;

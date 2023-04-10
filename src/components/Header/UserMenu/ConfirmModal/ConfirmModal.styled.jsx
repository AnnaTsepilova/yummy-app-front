import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  height: 180px;
  background-color: var(--bgColor);
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  animation-name: slide-down;
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 215px;
  }
`;

export const Title = styled.span`
  margin-bottom: 24px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ConfirmBtn = styled.button`
  width: 137px;
  height: 49px;
  border: none;
  border-radius: 6px;
  color: var(--bgColor);
  background-color: var(--greenColor);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  transition: background-color 250ms var(--transition-function),
    color 250ms var(--transition-function);

  &:hover {
    color: var(--secondaryBlackColor);
    background-color: var(--greenColor);
  }

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 59px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const CancelBtn = styled.button`
  width: 137px;
  height: 49px;
  border: none;
  border-radius: 6px;
  color: var(--secondaryTextColor);
  background-color: #d9d9d9;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 59px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

import styled from 'styled-components';
import { ReactComponent as NavClose } from 'images/MenuNavClose/menu-nav-close.svg';

// MOdal box

export const ModalContentWrp = styled.div`
  position: absolute;
  width: 330px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 32px 24px;
  background: #fafafa;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: 60px 50px;
  }
`;

export const CLoseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;

    width: 24px;
    height: 24px;
  }
`;

export const CloseIcon = styled(NavClose)`
  display: block;
  width: 100%;
  height: 100%;
`;

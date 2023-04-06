import { BackDrop, ModalArea } from './Modal.styled';

const Modal = ({ children }) => {
  return (
    <BackDrop>
      <ModalArea>{children}Modal</ModalArea>
    </BackDrop>
  );
};

export default Modal;

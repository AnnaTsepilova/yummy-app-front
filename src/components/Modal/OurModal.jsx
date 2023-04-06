import { ModalContentWrp, CLoseBtn, CloseIcon } from './OurModal.styled';
import { Modal } from '@mui/material';

const OurModal = ({ children, isOpen, openFnc }) => {
  return (
    <Modal open={isOpen} onClose={openFnc}>
      <ModalContentWrp>
        <CLoseBtn onClick={openFnc}>
          <CloseIcon />
        </CLoseBtn>
        {children}
      </ModalContentWrp>
    </Modal>
  );
};

export default OurModal;

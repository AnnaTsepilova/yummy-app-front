import { useState } from 'react';
// import Modal from 'components/Modal/Modal';
// import ConfirmModal from './ConfirmModal/ConfirmModal';
// import EditUserForm from './EditUserForm/EditUserForm';
import UserAvatar from './UserAvatar/UserAvatar';
// import UserMenuModalForm from './UserMenuModalForm/UserMenuModalForm';
import UserName from './UserName/UserName';
import { Wrapper, Container } from './UserMenu.styled';

const UserMenu = () => {
  const [modalSmall, setModalSmall] = useState(false);
  // const [modalEdit, setModalEdit] = useState(false);
  // const [modalConfirm, setModalConfirm] = useState(false);

  const openModal = () => {
    setModalSmall(true);
  };

  // const closeModal = () => {
  //   setModalSmall(false);
  // };

  // const openModalEdit = () => {
  //   setModalEdit(true);
  // };

  // const closeModalEdit = () => {
  //   setModalEdit(false);
  // };

  // const openModalConfirm = () => {
  //   setModalConfirm(true);
  // };

  // const closeModalConfirm = () => {
  //   setModalConfirm(false);
  // };

  return (
    <Wrapper>
      <Container onClick={openModal}>
        <UserAvatar />
        <UserName />
      </Container>
      {modalSmall &&
        {
          /* <Modal onClose={closeModal}>
          <EditUserForm
            closeModal={closeModal}
            openEdit={openModalEdit}
            openConfirm={openModalConfirm}
          />
        </Modal> */
        }}
      {/* {modalEdit && (
        <Modal onClose={closeModalEdit}>
          <UserMenuModalForm />
        </Modal>
      )} */}
      {/* {modalConfirm && (
        <Modal onClose={closeModalConfirm}>
          <ConfirmModal onClose={closeModalConfirm} />
        </Modal>
      )} */}
    </Wrapper>
  );
};

export default UserMenu;

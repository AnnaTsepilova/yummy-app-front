import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logoutUser } from 'redux/auth/authOperation';
import MobMenuCloseBtn from 'components/Header/MobileNavMenu/MobMenuCloseBtn/MobMenuCloseBtn';

import {
  Container,
  Title,
  BtnWrapper,
  ConfirmBtn,
  CancelBtn,
} from './ConfirmModal.styled';

const ConfirmModal = ({ onClose }) => {
  // const dispatch = useDispatch();

  const handleLogoutBtnClick = () => {
    onClose();
    // dispatch(logoutUser());
  };

  return (
    <Container>
      <Title>Are you sure you want to log out?</Title>
      <BtnWrapper>
        <ConfirmBtn onClick={handleLogoutBtnClick}>Log out</ConfirmBtn>
        <CancelBtn onClick={onClose}>Cancel</CancelBtn>
      </BtnWrapper>
      <MobMenuCloseBtn closeMenu={onClose} />
    </Container>
  );
};

export default ConfirmModal;

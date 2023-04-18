import React from 'react';

import MobMenuCloseBtn from 'components/Header/MobileNavMenu/MobMenuCloseBtn/MobMenuCloseBtn';
import {
  Container,
  Title,
  BtnWrapper,
  ConfirmBtn,
  CancelBtn,
} from 'components/Header/UserMenu/ConfirmModal/ConfirmModal.styled';

const ConfirmModal = ({ onClose }) => {
  const handleLogoutBtnClick = () => {
    onClose();
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

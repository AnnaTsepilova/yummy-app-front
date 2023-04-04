import React from 'react';

import UserArrowSvg from 'components/Header/UserMenu/UserArrowSvg/UserArrowSvg';

import EditPen from 'images/EditProfilePen/edit-profile-pen.svg';

import {
  Container,
  EditButton,
  EditSpan,
  LogoutButton,
} from './EditUserForm.styled';

const EditUserForm = ({ closeModal, openEdit, openConfirm, container }) => {
  const rect = container.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const style = {
    top: `${Math.round(rect.bottom + 15)}px`,
    right: `${Math.round(viewportWidth - rect.right)}px`,
  };
  const editBtnClickHandle = () => {
    closeModal();
    openEdit();
  };
  const logOutBtnClickHandle = () => {
    closeModal();
    openConfirm();
  };
  return (
    <Container style={style}>
      <EditButton onClick={editBtnClickHandle}>
        <EditSpan>Edit profile</EditSpan>
        <EditPen />
      </EditButton>
      <LogoutButton onClick={logOutBtnClickHandle}>
        <button typeBtn="submit" title={'Log out'}>
          <UserArrowSvg />
        </button>
      </LogoutButton>
    </Container>
  );
};

export default EditUserForm;

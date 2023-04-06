import { Link } from 'react-router-dom';
import {
  BurgerBtn,
  MobileHeaderWrp,
  UserWrp,
  UserAvatarWrp,
  UserWithoutAvatar,
  UserName,
  UserInform,
  PopUp,
  EditWrapper,
  EditBtn,
  EditText,
  LogOutBtn,
  ModalContentWrp,
  CLoseBtn,
  CloseIcon,
} from './MobileHeader.styled';
import { ReactComponent as MobileLogo } from 'images/Logo/logo-header.svg';
import { ReactComponent as BurgerIcon } from 'images/HeaderMenu/header-menu.svg';
import { ReactComponent as EditIcon } from 'images/EditProfilePen/edit-profile-pen.svg';
import { ReactComponent as ErrowRight } from 'images/UserMenu/arrow-right.svg';
import { useState } from 'react';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import { Modal } from '@mui/material';
import UserProfileForm from 'components/UserProfileForm/UserProfileForm';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  const openPopUp = () => {
    setPopUpIsOpen(!popUpIsOpen);
  };

  const togleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <MobileNavMenu isOpen={isOpen} closeMenu={openNav} />
      <MobileHeaderWrp>
        <Link to={'/'}>
          <MobileLogo />
        </Link>
        <UserWrp>
          <UserInform onClick={openPopUp}>
            <UserAvatarWrp>
              <UserWithoutAvatar />
              {/* <img src={NotFoundAvatar} alt="avatar" /> */}
            </UserAvatarWrp>

            <UserName>Name</UserName>
            {popUpIsOpen && (
              <PopUp>
                <EditWrapper>
                  <EditText>Edit profile</EditText>
                  <EditBtn type="button" onClick={togleModal}>
                    <EditIcon />
                  </EditBtn>
                </EditWrapper>
                <LogOutBtn>
                  Log out
                  <ErrowRight />
                </LogOutBtn>
              </PopUp>
            )}
          </UserInform>
          <BurgerBtn onClick={openNav}>
            <BurgerIcon />
          </BurgerBtn>
        </UserWrp>
      </MobileHeaderWrp>
      {modalIsOpen && (
        <Modal open={modalIsOpen} onClose={togleModal}>
          <ModalContentWrp>
            <CLoseBtn onClick={togleModal}>
              <CloseIcon />
            </CLoseBtn>
            <UserProfileForm />
          </ModalContentWrp>
        </Modal>
      )}
    </>
  );
};

export default MobileHeader;

import {
  UserAvatarWrp,
  UserWithoutAvatar,
  UserName,
  UserInform,
} from './UserInformation.styled';
import { useState } from 'react';
import UserProfileForm from 'components/UserProfileForm/UserProfileForm';
import OurModal from 'components/Modal/OurModal';
import LogOutModal from '../LogOutModal/LogOutModal';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserAvatar } from 'redux/auth/authSelectors';
import PopUp from '../PopUp/PopUp';

const UserIformation = () => {
  const [openEl, setOpenEl] = useState(null);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenLogOutModal, setIsOpenLogOutBtn] = useState(false);

  const userName = useSelector(selectUserName);
  const avatar = useSelector(selectUserAvatar);

  const openPopUp = e => {
    if (!popUpIsOpen) {
      setPopUpIsOpen(true);
      setOpenEl(e.target);
      return;
    } else {
      setPopUpIsOpen(false);
    }
  };

  const togleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const togleLogOutModal = () => {
    setIsOpenLogOutBtn(!isOpenLogOutModal);
  };

  return (
    <>
      <UserInform onClick={openPopUp}>
        <UserAvatarWrp avatar={avatar}>
          {avatar ? '' : <UserWithoutAvatar />}
        </UserAvatarWrp>

        <UserName>{userName || 'User Name'}</UserName>

        {popUpIsOpen && (
          <PopUp
            openModalFnc={togleModal}
            openLogOutModalFnc={togleLogOutModal}
            openPopUpFnc={openPopUp}
            openEl={openEl}
          />
        )}
      </UserInform>

      {isOpenLogOutModal && (
        <OurModal isOpen={isOpenLogOutModal} openFnc={togleLogOutModal}>
          <LogOutModal closeFnc={togleLogOutModal} />
        </OurModal>
      )}

      {modalIsOpen && (
        <OurModal isOpen={modalIsOpen} openFnc={togleModal}>
          <UserProfileForm />
        </OurModal>
      )}
    </>
  );
};

export default UserIformation;

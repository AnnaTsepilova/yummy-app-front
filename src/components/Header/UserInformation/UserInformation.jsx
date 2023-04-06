import {
  UserAvatarWrp,
  UserWithoutAvatar,
  UserName,
  UserInform,
  PopUp,
  EditWrapper,
  EditBtn,
  EditText,
  LogOutBtn,
} from './UserInformation.styled';
import { ReactComponent as EditIcon } from 'images/EditProfilePen/edit-profile-pen.svg';
import { ReactComponent as ErrowRight } from 'images/UserMenu/arrow-right.svg';
import { useState } from 'react';
import UserProfileForm from 'components/UserProfileForm/UserProfileForm';
import OurModal from 'components/Modal/OurModal';
import LogOutModal from '../LogOutModal/LogOutModal';
import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';

const UserIformation = () => {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpenLogOutModal, setIsOpenLogOutBtn] = useState(false);

  const userName = useSelector(selectUserEmail);

  console.log(userName);
  const openPopUp = () => {
    setPopUpIsOpen(!popUpIsOpen);
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
        <UserAvatarWrp>
          <UserWithoutAvatar />
          {/* <img src={NotFoundAvatar} alt="avatar" /> */}
        </UserAvatarWrp>

        <UserName>{userName}</UserName>
        {popUpIsOpen && (
          <PopUp>
            <EditWrapper>
              <EditText>Edit profile</EditText>
              <EditBtn type="button" onClick={togleModal}>
                <EditIcon />
              </EditBtn>
            </EditWrapper>
            <LogOutBtn onClick={togleLogOutModal}>
              Log out
              <ErrowRight />
            </LogOutBtn>
          </PopUp>
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

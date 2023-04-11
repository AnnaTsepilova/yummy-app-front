import { useCallback, useEffect } from 'react';
import {
  PopUpWrp,
  EditWrapper,
  EditBtn,
  EditText,
  LogOutBtn,
  EditPen,
} from './PopUp.styled';
import { ReactComponent as ErrowRight } from 'images/UserMenu/arrow-right.svg';

const PopUp = ({ openModalFnc, openLogOutModalFnc, openPopUpFnc, openEl }) => {
  const closePopUp = useCallback(
    e => {
      if (e.target !== openEl) {
        openPopUpFnc();
      }
    },
    [openPopUpFnc, openEl]
  );

  useEffect(() => {
    window.addEventListener('click', closePopUp);

    return () => {
      window.removeEventListener('click', closePopUp);
    };
  }, [closePopUp]);

  return (
    <PopUpWrp onClose={openPopUpFnc}>
      <EditWrapper onClick={openModalFnc}>
        <EditText>Edit profile</EditText>
        <EditBtn type="button">
          <EditPen />
        </EditBtn>
      </EditWrapper>
      <LogOutBtn onClick={openLogOutModalFnc}>
        Log out
        <ErrowRight />
      </LogOutBtn>
    </PopUpWrp>
  );
};

export default PopUp;

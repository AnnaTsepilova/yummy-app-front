import { useDispatch } from 'react-redux';
import {
  LogOutWrapper,
  BtnWrapper,
  LogOutText,
  YesBtn,
  NoBtn,
} from './LogOutModal.styled';
import { logOut } from 'redux/auth/authOperations';

const LogOutModal = ({ closeFnc }) => {
  const dispatch = useDispatch();

  return (
    <LogOutWrapper>
      <LogOutText>Are you sure you want to log out?</LogOutText>
      <BtnWrapper>
        <YesBtn onClick={closeFnc}>No</YesBtn>
        <NoBtn onClick={() => dispatch(logOut())}>Yes</NoBtn>
      </BtnWrapper>
    </LogOutWrapper>
  );
};

export default LogOutModal;

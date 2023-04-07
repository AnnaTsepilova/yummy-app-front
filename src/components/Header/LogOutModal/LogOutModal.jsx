import {
  LogOutWrapper,
  BtnWrapper,
  LogOutText,
  YesBtn,
  NoBtn,
} from './LogOutModal.styled';

const LogOutModal = ({ closeFnc }) => {
  return (
    <LogOutWrapper>
      <LogOutText>Are you sure you want to log out?</LogOutText>
      <BtnWrapper>
        <YesBtn onClick={closeFnc}>No</YesBtn>
        <NoBtn>Yes</NoBtn>
      </BtnWrapper>
    </LogOutWrapper>
  );
};

export default LogOutModal;

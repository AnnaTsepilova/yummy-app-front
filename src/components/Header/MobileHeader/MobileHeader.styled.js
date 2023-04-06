import styled from 'styled-components';
import { StyledSearchGreenBtn } from '../../Buttons/Buttons.styled';
import { ReactComponent as NavClose } from 'images/MenuNavClose/menu-nav-close.svg';
import { ReactComponent as NotFoundAvatar } from 'images/InputsState/user.svg';

export const MobileHeaderWrp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserWrp = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInform = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const UserAvatarWrp = styled.div`
  width: 34px;
  height: 34px;

  padding: 5px;
  margin-right: 14px;
  border-radius: 50%;
  overflow: hidden;

  background-color: var(--light-gray);
`;

export const UserAvatar = styled.img`
  width: 34px;
  height: 34px;
`;

export const UserWithoutAvatar = styled(NotFoundAvatar)`
  fill: white;
`;

export const UserName = styled.p`
  margin-right: 24px;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;

  color: var(--secondary-black);
`;

// Pop-Up style

export const PopUp = styled.div`
  position: absolute;
  top: 52px;
  right: 20%;
  width: 161px;
  height: 130px;

  padding: 18px;

  background: #fafafa;
  border: 1px solid #8baa36;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 177px;
    height: 134px;
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const EditText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;

  color: #23262a;
`;

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
`;

export const LogOutBtn = styled(StyledSearchGreenBtn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 125px;
  padding: 12px 24px;

  @media screen and (min-width: 768px) {
    min-width: 141px;
    padding: 12px 32px;
    font-size: 14px;
  }
`;

// MOdal box

export const ModalContentWrp = styled.div`
  position: absolute;
  width: 330px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 32px 24px;
  background: #fafafa;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 40px 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: 60px 50px;
  }
`;

export const CLoseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;

    width: 24px;
    height: 24px;
  }
`;

export const CloseIcon = styled(NavClose)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const BurgerBtn = styled.button`
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;
  background-color: transparent;
`;

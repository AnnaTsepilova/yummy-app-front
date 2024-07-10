import styled from 'styled-components';
import { ReactComponent as UserIcon } from 'images/UserMenu/user-icon.svg';
import { ReactComponent as EditPen } from 'images/EditProfilePen/edit-profile-pen.svg';
import { ReactComponent as PasswordIcon } from 'images/UserMenu/locl-icon.svg';
import { ReactComponent as PlusIcon } from 'images/UserMenu/plus.svg';
import { StyledSubscribeGreenBtn } from 'components/Buttons/Buttons.styled';
import { ThumWrp } from './UserAvatarThumb/UserAvatarThumb.styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarLabel = styled.label`
  position: relative;

  border-radius: 50%;
  margin-bottom: 54px;

  cursor: pointer;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 88px;
  height: 88px;

  border-radius: 50%;
  padding: 24px;

  background: var(--light-gray);
  overflow: hidden;

  background-image: ${props =>
    props.avatar ? `url(${props.avatar})` : 'none'};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

export const PlusFileIcon = styled(PlusIcon)`
  transform: scale(1);
  position: absolute;
  right: 13px;
  bottom: -6px;
  width: 24px;
  height: 24px;

  transition: transform var(--transition-function);

  ${AvatarLabel}:hover & {
    transform: scale(1.5);
  }

  ${ThumWrp}:hover & {
    transform: scale(1.5);
  }
`;

export const Avatar = styled.img``;

export const ProfileIcon = styled(UserIcon)`
  width: 44px;
  height: 44px;

  @media screen and (min-width: 768px) {
    width: 47px;
    height: 47px;
  }
`;

export const FileInput = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const NameLabel = styled.label`
  position: relative;
  width: 100%;

  margin-bottom: 24px;

  &:focus-visible {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const NameInput = styled.input`
  width: 100%;

  padding: 14px 40px;
  border: 2px solid var(--light-gray);
  border-radius: 6px;
  transition: border var(--transition-function);

  &:focus-visible {
    outline: none;
    border: 2px solid var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    padding: 15px 51px;
  }

  @media screen and (min-width: 1440px) {
    padding: 17px 51px;
  }
`;

export const PasswordLabel = styled(NameLabel)`
  opacity: ${props => (props.need ? '1' : '0')};
  display: ${props => (props.need ? 'block' : 'none')};

  transition: display var(--transition-function),
    opasity var(--transition-function);
`;

export const SmallUserIcon = styled(UserIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;

  width: 18px;
  height: 18px;

  stroke: var(--light-gray);

  transition: stroke var(--transition-function);

  ${NameLabel}:hover & {
    stroke: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    left: 18px;

    width: 24px;
    height: 24px;
  }
`;

export const PasswordInputIcon = styled(PasswordIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;

  width: 17px;
  height: 17px;

  stroke: var(--light-gray);

  transition: stroke var(--transition-function);

  ${NameLabel}:hover & {
    stroke: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    left: 18px;

    width: 24px;
    height: 24px;
  }
`;

export const NameEditIcon = styled(EditPen)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;

  width: 17px;
  height: 17px;

  stroke: var(--light-gray);

  transition: stroke var(--transition-function);

  ${NameLabel}:hover & {
    stroke: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    right: 18px;

    width: 19px;
    height: 19px;
  }
`;

export const SubmitBtn = styled(StyledSubscribeGreenBtn)`
  min-width: 100%;
  padding: 14px;

  @media screen and (min-width: 768px) {
    padding: 18px;
  }
`;

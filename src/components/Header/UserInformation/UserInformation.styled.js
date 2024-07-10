import styled from 'styled-components';

import { ReactComponent as NotFoundAvatar } from 'images/InputsState/user.svg';

export const UserInform = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const UserAvatarWrp = styled.div`
  width: 34px;
  height: 34px;

  padding: 5px;
  margin-right: 14px;
  border-radius: 50%;

  overflow: hidden;

  background-color: var(--light-gray);
  background-image: ${props =>
    props.avatar ? `url(${props.avatar})` : 'none'};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: auto;
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
  transition: color var(--transition-function);

  &:hover {
    color: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    margin-right: 50px;

    font-size: 14px;
  }
`;

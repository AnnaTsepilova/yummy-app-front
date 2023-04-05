import styled from 'styled-components';

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

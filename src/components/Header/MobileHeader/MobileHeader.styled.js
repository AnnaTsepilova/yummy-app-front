import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileHeaderWrp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrp = styled(Link)`
  height: 40px;
`;

export const UserWrp = styled.div`
  display: flex;
  align-items: center;
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

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as BurgerIcon } from 'images/HeaderMenu/header-menu.svg';

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

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const BurgerStyledIcon = styled(BurgerIcon)`
  stroke: var(--secondary-black);
  transition: stroke var(--transition-function);

  &:hover {
    stroke: var(--primary-green);
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 19px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 18px;
  }
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const MenuBurgerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

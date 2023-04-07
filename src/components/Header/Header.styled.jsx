import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  height: 40px;
`;

export const MenuBurgerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  margin-right: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: var(--secondaryTextColor);

  &:hover,
  &:focus {
    color: var(--greenColor);
  }
`;

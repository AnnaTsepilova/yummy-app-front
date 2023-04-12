import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: var(--secondary-black);

  transition: color var(--transition-function);

  cursor: pointer;

  &.active {
    color: var(--primary-green);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

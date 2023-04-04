import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: var(--secondary-black);

  &:hover {
    color: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const SearchGlassWrapper = styled.div`
  display: inline-block;
  position: relative;
  top: 3px;
  left: -5px;

  @media screen and (min-width: 1440px) {
    top: 0;
    left: -5px;
  }
`;







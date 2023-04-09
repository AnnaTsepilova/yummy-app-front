import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BgMobileImage from 'images/MenuBackground/menu-background-mob.png';
import BgTabletImage from 'images/MenuBackground/menu-background-tab.png';

export const Container = styled.div`
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  overflow-y: auto;

  background-color: var(--background-light-green);
  background-image: url(${BgMobileImage});
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 10000;

  transition: transform var(--transition-function);

  @media screen and (min-width: 768px) {
    background-image: url(${BgTabletImage});
  }
`;

export const MobileNavWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 18px 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 18px 32px;
  }
`;

export const Btnswrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 124px;
`;

export const MobCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: none;
  background-color: transparent;

  transition: background-color var(--transition-function);

  &:hover {
    background-color: var(--light-gray);
  }
`;

export const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* transform: translateX(50%); */
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  padding: 18px 16px;

  background-color: var(--background-light-green);
  background-image: url('images/MenuBackground/menu-background-mob.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 10000;

  transition: transform var(--transition-function);

  @media screen and (min-width: 768px) {
    background-image: url('images/MenuBackground/menu-background-tab.png');
  }
`;

export const Btnswrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
`;

export const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
`;

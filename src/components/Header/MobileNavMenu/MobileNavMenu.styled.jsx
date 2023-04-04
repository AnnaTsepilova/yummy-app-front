import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--background-light-green);
  background-image: url('images/MenuBackground/menu-background-mob.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 10000;

  @media screen and (min-width: 768px) {
    background-image: url('images/MenuBackground/menu-background-tab.png');
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const MobNavBtn = styled.div`
position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
`;
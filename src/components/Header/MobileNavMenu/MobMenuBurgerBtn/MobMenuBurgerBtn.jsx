import React from 'react';
import { ReactComponent as MobMenuBtn } from 'images/HeaderMenu/header-menu.svg';

import { Button, Svg } from './MobMenuBurgerBtn.styled';

const MobMenuBurgerBtn = ({ openMenu }) => {
  return (
    <Button
      onClick={() => {
        openMenu();
      }}
    >
      <Svg className="Svg">
        <MobMenuBtn />
      </Svg>
    </Button>
  );
};

export default MobMenuBurgerBtn;

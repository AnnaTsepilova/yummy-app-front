import React from 'react';

import { ReactComponent as NavClose } from 'images/MenuNavClose/menu-nav-close.svg';

import { Button } from './MobMenuCloseBtn.styled.jsx';

const MobMenuCloseBtn = ({ closeMenu }) => {
  return (
    <Button
      onClick={() => {
        closeMenu();
      }}
    >
      <NavClose />
    </Button>
  );
};

export default MobMenuCloseBtn;

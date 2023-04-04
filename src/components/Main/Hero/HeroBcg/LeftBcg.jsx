import React from 'react';
import { createPortal } from 'react-dom';
import { Left, Right } from './LeftBcg.styled';

const mainRoot = document.querySelector('#main_bcg');
const LeftBcg = () => {
  return createPortal(<Left></Left>, mainRoot);
};
const RightBcg = () => {
  return createPortal(<Right />, mainRoot);
};
const HeroBcg = () => {
  return (
    <>
      <LeftBcg />
      <RightBcg />
    </>
  );
};

export default HeroBcg;

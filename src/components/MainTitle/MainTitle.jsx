import React from 'react';
import { MainTitleStyled } from './MainTitle.styled';

const MainTitle = ({ title }) => {
    return (
    <>
        <MainTitleStyled>{title}</MainTitleStyled>
    </>
  )
}

export default MainTitle;
// const { default: styled } = require('styled-components');
import styled from 'styled-components';
import { MainTitleStyled } from 'components/MainTitle/MainTitle.styled';

export const Wrraper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled(MainTitleStyled)`
  @media screen and (min-width: 768px) {
    padding-bottom: 72px;
  }
`;

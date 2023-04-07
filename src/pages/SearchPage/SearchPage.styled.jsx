import styled from 'styled-components';
import { MainTitleStyled } from 'components/MainTitle/MainTitle.styled';

export const Title = styled(MainTitleStyled)`
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 50px;
  }
`;

import styled from 'styled-components';
import { MainTitleStyled } from 'components/MainTitle/MainTitle.styled';

export const Title = styled(MainTitleStyled)`
  padding-bottom: 72px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
`;

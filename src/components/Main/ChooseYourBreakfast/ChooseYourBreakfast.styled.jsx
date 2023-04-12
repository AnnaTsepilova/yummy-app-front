import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const PopUp = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: none;
  width: 225px;
  margin-left: 100px;
  background-color: var(--primary-white);

  margin-bottom: 115px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 260px;
    margin-left: 74px;
    padding: 12px;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px;
    width: 298px;
    height: 114px;
    margin-left: 410px;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: var(--primary-gray);
  margin-bottom: 4px;
  & span {
    color: var(--primary-green);
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;
export const BoxLink = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  transition: color var(--transition-function);

  &:hover {
    color: var(--primary-green);
  }
`;

export const RecipeLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: var(--primary-gray);

  display: flex;
  justify-content: flex-end;
  align-items: center;

  transition: color var(--transition-function);

  &:hover {
    color: var(--primary-green);
  }
`;

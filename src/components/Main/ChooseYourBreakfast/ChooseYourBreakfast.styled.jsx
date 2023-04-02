import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const PopUp = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: none;
  width: 225px;
  margin-left: 100px;
  background-color: var(--primary-white);
  background-color: yellow;

  margin-bottom: 115px;
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
`;
export const BoxLink = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    color: #8baa36;
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
`;

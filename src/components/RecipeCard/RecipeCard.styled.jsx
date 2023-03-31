import styled from 'styled-components';

export const Card = styled.li`
  border-radius: 8px;
  width: 343px;
  height: 323px;
  position: relative;
`;
export const RecipePicture = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;

export const RecipeTitle = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  color: #3e4462;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  position: absolute;
  bottom: 26px;
  left: 18px;
  right: 18px;
`;

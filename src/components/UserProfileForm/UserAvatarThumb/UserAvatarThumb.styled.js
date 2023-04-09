import styled from 'styled-components';

export const ThumWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 88px;
  height: 88px;

  border-radius: 50%;

  background: #d9d9d9;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

export const ThumImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

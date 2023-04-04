const { default: styled } = require('styled-components');

export const Wrapper = styled.div`
  display: block;
  width: 60px;
  height: 60px;
  background-size: cover;
  border-radius: 6px;
  background-color: var(--ingridientsBcg);
  margin: auto;

  @media screen and (min-width: 768px) {
    min-width: 93px;
    height: 97px;
  }
`;

export const Image = styled.img`
  border-radius: 6px;
`;

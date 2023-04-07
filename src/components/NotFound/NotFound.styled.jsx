import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: auto;
`;

export const Text = styled.p`
  padding: 0;

  font-weight: 500;
  font-size: 14px;
  line-height: 1;

  opacity: 0.5;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    font-size: 24px;
  }
`;

export const Image = styled.div`
  margin: 50px auto 24px;
  width: 208px;
  height: 133px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    width: 350px;
    height: 225px;
  }
`;

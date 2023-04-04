import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 50px;
  }
`;

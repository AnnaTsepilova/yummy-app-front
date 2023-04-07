import styled from 'styled-components';
import CheckIcon from 'images/Recipe/pick-big.png';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-left: 28px;
  cursor: pointer;

  border: 2px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    margin-left: 78px;
  }

  @media screen and (min-width: 1440px) {
    width: 35px;
    height: 35px;
    margin-left: 151px;
  }
`;

export const SvgCheck = styled(CheckIcon)`
  width: 8.7px;
  height: 8.7px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 17px;
    height: 17px;
  }
`;

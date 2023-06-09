import styled from 'styled-components';
import CheckIcon from 'images/Recipe/pick-big.png';

export const Svg = styled.svg`
  width: 17px;
  height: 17px;

  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 28px;

  width: 18px;
  height: 18px;

  border: 2px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    margin-left: 78px;
  }

  @media screen and (min-width: 1440px) {
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

import styled from 'styled-components';

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 157px;
`;
export const Caption = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.005em;
  margin-bottom: 14px;

  color: var(--secondary-black);
  & span {
    color: var(--primary-green);
  }
`;
export const Wrapper = styled.div`
  width: 248px;
  padding: 0px 5px;
  text-align: center;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;

  color: var(--primary-black);
`;

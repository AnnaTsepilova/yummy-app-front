import styled from 'styled-components';

export const MainBox = styled.div`
  @media screen and (max-width: 1439.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  margin-top: 50px;

  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    margin-top: 96px;
  }
`;

export const Text = styled.p`
margin-left: 14px;
  color: rgba(0, 0, 0, 0.8);
 font-size: 12px
  line-height: 1.17;
  letter-spacing: -0.02em;
`;

export const List = styled.ul`
  width: 100%;
  max-width: 558px;
`;

export const Box = styled.div`
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Item = styled.li`
  display: flex;

  :not(:first-child) {
    margin-top: 14px;
  }
`;

export const SpanBox = styled.div`
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary-green);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Span = styled.span`
  padding: 8px;
  font-weight: 600
  font-size: 12px
  line-height: 1.3;
`;

export const Img = styled.img`
  @media screen and (max-width: 1439.98px) {
    margin-top: 40px;
  }

  width: 343px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 433px;
    height: 332px;
  }
`;

import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 500px) {
    max-width: 440px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 14px;
  width: 100%;
  height: 42px;

  background-color: var(--primary-green);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 21px 32px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 21px 40px;
  }
`;

export const ListHeaderText = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  color: var(--primary-white);

  :last-child {
    margin-left: 18px;

    @media screen and (min-width: 768px) {
      margin-left: 38px;
    }

    @media screen and (min-width: 1440px) {
      margin-left: 109px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 14px 29px 14px 14px;

  background: var(--background-light-green);
  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 16px;
  }

  @media screen and (max-width: 500px) {
    max-width: 440px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    padding: 33px 58px 33px 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 24px;
    padding: 27px 70px 27px 58px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 57px;
  height: 57px;

  @media screen and (min-width: 768px) {
    width: 112px;
    height: 112px;
  }

  @media screen and (min-width: 1440px) {
    width: 128px;
    height: 128px;
  }
`;

export const Title = styled.p`
  margin-left: 12px;
  max-width: 95px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;

  color: var(--primary-gray);

  @media screen and (min-width: 768px) {
    margin-left: 40px;
    max-width: 208px;
    font-size: 24px;
    line-height: 1;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 66px;
    max-width: 547px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Measure = styled.span`
  min-width: 47px;
  max-width: 75px;
  padding: 4px 8px;

  background-color: var(--primary-green);
  border-radius: 4px;

  text-align: center;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  color: var(--primary-white);

  @media screen and (min-width: 768px) {
    min-width: 68px;
    max-width: 130px;
    font-size: 18px;
  }
`;

// ??
export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 46px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-left: 110px;
  }
`;

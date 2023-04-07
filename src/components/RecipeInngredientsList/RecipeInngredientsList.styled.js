import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 144px;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;

export const List = styled.ul``;

export const ListItemHeader = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 10px;
  width: 100%;
  height: 38px;
  max-width: 1240px;

  background-color: var(--primary-green);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 20px 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 17px 40px;
  }
`;

export const ListHeaderText = styled.span`
  color: var(--primary-white);
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  :last-child {
    margin-left: 24px;

    @media screen and (min-width: 768px) {
      margin-left: 78px;
    }

    @media screen and (min-width: 1440px) {
      margin-left: 142px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  letter-spacing: 0.03em;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14.5px 29px 14px 14px;

  background: #ebf3d4;
  border-radius: 8px;
  :nth-of-type(2) {
    margin-top: 24px;
    @media screen and (min-width: 768px) {
      margin-top: 32px;
    }
  }

  margin-top: 16px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (min-width: 768px) {
    padding: 33px 58px 33px 40px;
    margin-top: 24px;
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
`;

export const Title = styled.h2`
  margin-left: 10px;

  font-size: 16px;
  line-height: 24px;

  font-size: 12px;
  line-height: 1.2;
  font-weight: 500;

  color: var(--primary-gray);

  @media screen and (min-width: 768px) {
    margin-left: 16px;
    font-size: 16px;
  }
`;

export const Measure = styled.span`
  color: var(--primary-white);
  padding: 4px 10px;

  background-color: var(--primary-green);
  border-radius: 4px;

  font-size: 12px;
  line-height: 1.2;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 46px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-left: 110px;
  }
`;

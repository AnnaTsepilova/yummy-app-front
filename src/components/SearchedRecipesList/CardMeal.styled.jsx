import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  display: none;
`;

export const CardTitle = styled.div`
  font-family: black;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: black;
  padding: 16px;
  background-color: white;
  position: absolute;
  top: 245px;
  left: 18px;
  border-radius: 8px;
  width: calc(100% - 36px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    p {
      width: 100%;
      padding: 5px;
    }
    @media (min-width: 1440px) {
      margin-top: 8px;
    }
  }
`;

export const CardImg = styled.img`
  height: 323px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 1000ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CardDish = styled.li`
  width: 343px;
  height: 323px;
  border-radius: 8px;
  position: relative;
  @media (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }
  @media (min-width: 1440px) {
    width: calc((100% - 42px) / 4);
  }
  a {
    display: block;
    overflow: hidden;
    border-radius: 8px;
    :hover img {
      transform: scale(1.25);
      filter: contrast(130%);
    }
  }
`;

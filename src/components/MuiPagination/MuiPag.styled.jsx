import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  height: 51px;
  max-width: 275px;
  width: fit-content;

  position: relative;
  box-sizing: border-box;

  margin: 0 auto;
  margin-top: 50px;
  padding: 12px 26px;

  border-radius: 26px;

  background-color: #fafafa;
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);

  & nav {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 24px;
    max-width: 324px;
    height: 55px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 24px;
    max-width: 436px;
  }

  & .MuiPaginationItem-icon {
    fill: rgba(169, 169, 169, 0.73);
  }

  & .MuiPaginationItem-ellipsis {
    color: black;
  }

  & .MuiPagination-ul {
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;

    margin-top: 0;
    gap: 0px;
    color: #656565;
  }

  & .MuiPaginationItem-page {
    padding: 0;
    min-width: 27px;
    color: #656565;
  }

  & .MuiPaginationItem-page.Mui-selected {
    width: 27px;
    height: 27px;

    background-color: #ebf3d4;
    color: black;

    transition: var (--transition-function);

    &:hover,
    &:focus {
      color: black;

      background-color: #ebf3d4;
    }
  }
`;

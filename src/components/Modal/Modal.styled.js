import styled from 'styled-components';

export const BackDrop = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 93px;

  overflow-y: scroll;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalArea = styled.div`
  z-index: 3;
  margin-right: auto;
  margin-left: auto;
  transform: scale(1);
  padding: 40px;
  width: 400px;
  min-height: 300px;

  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

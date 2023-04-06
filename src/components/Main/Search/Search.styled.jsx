import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 18px 44px;
  background-color: var(--primary-white);
  padding: 16px 31px;
  border: none;

  width: 295px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  border: 1px solid #f0f0f0;
  @media screen and (min-width: 768px) {
    width: 362px;
    font-size: 16px;
    padding: 17px 37px;
  }
  @media screen and (min-width: 1440px) {
    padding: 22px 47px;
    width: 510px;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 147px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 267px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const BtnWrapper = styled.div`
  position: absolute;
  top: -1px;
  right: 7%;
  @media screen and (min-width: 768px) {
    /* top: -1px; */
    right: -1px;
  }
`;

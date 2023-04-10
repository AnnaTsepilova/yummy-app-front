import styled from 'styled-components';
import { Field } from 'formik';

export const FormWrapper = styled.div`
  width: 343px;
  height: 202px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 505px;
    height: 280px;
    margin-bottom: 32px;
  }
`;

export const TitleStyled = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TextAreaStyled = styled(Field)`
  width: 343px;
  height: 154px;

  resize: none;
  border: none;
  background: #f5f5f5;
  border-radius: 6px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 505px;
    height: 224px;
  }
`;

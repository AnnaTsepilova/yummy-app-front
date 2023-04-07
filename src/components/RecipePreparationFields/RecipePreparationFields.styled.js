import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 18px;
`;

export const TitleStyled = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const TextAreaStyled = styled.textarea`
  max-width: auto;
  max-height: 154px;
  border: none;
  background-color: #d9d9d9;
  border-radius: 6px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

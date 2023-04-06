import styled from 'styled-components';
import {
  StyledLogOutBtn,
  StyledCancelBtn,
} from 'components/Buttons/Buttons.styled';

export const LogOutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px 0;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const LogOutText = styled.p`
  margin-bottom: 24px;

  font-size: 14px;
  line-height: 1.3;

  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 18px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const YesBtn = styled(StyledLogOutBtn)``;

export const NoBtn = styled(StyledCancelBtn)``;

import styled from 'styled-components';

export const StyledSearchBlackBtn = styled.button`
  background-color: var(--secondary-black);
  padding: 16px 24px;
  min-width: 113px;
  color: var(--primary-white);
  border: none;
  border-radius: 18px 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 18px 24px;
    min-width: 161px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding: 23px 24px;
  }

  &:hover {
    background-color: var(--primary-green);
  }
`;
export const StyledSearchGreenBtn = styled.button`
  background-color: var(--primary-green);
  border-radius: 18px 44px;
  padding: 16px 24px;
  min-width: 113px;
  color: var(--primary-white);
  border: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 16px 24px;
    min-width: 161px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    padding: 23px 24px;
  }

  &:hover {
    background-color: var(--secondary-black);
  }
`;
export const StyledSignInBtn = styled.button`
  background-color: transparent;
  border-radius: 18px 44px;
  padding: 22px 44px;
  min-width: 141px;
  color: var(--primary-white);
  border: 2px solid var(--primary-white);
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  &:hover {
    border: 2px solid var(--primary-green);
    color: var(--primary-green);
  }
`;
export const StyledSubscribeGreenBtn = styled.button`
  background: var(--primary-green);
  border: none;
  border-radius: 6px;
  width: 339px;
  padding: 21px 134px;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: var(--primary-white);
  &:hover {
    color: var(--secondary-black);
  }
`;
export const StyledLogOutBtn = styled.button`
  background: var(--primary-green);
  border: none;
  border-radius: 6px;
  width: 192px;
  padding: 18px 39px;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: var(--primary-white);
  &:hover {
    background: var(--secondary-black);
  }
`;
export const StyledCancelBtn = styled.button`
  background: var(--light-gray);
  border: none;
  border-radius: 6px;
  width: 192px;
  padding: 18px 39px;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: var(--primary-black);
  &:hover {
    border: 1px solid var(--primary-black);
    background: transparent;
  }
`;

export const StyledSeeAllBtn = styled.div`
  background: var(--primary-green);
  border: none;
  border-radius: 6px;
  width: 94px;
  padding: 10px 24px;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-white);
  &:hover {
    background: var(--secondary-black);
  }
`;
export const StyledOtherCatBtn = styled.div`
  background-color: transparent;
  border-radius: 18px 44px;
  padding: 14px 32px;
  width: 195px;
  color: var(--secondary-black);

  cursor: pointer;
  border: 2px solid var(--primary-green);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  &:hover {
    background-color: var(--primary-green);
    color: var(--primary-white);
  }
`;

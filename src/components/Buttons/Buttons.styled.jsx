import styled from 'styled-components';

export const StyledSearchBlackBtn = styled.button`
  background-color: var(--secondary-black);
  border-radius: 18px 44px;
  border: none;

  padding: 16px 24px;
  min-width: 113px;

  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-white);
  text-align: center;

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
  border: none;

  padding: 16px 24px;
  min-width: 113px;

  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-white);
  text-align: center;

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

export const StyledSubscribeGreenBtn = styled.button`
  background: var(--primary-green);
  border: none;
  border-radius: 6px;

  min-width: 204px;
  padding: 11px;

  font-size: 14px;
  line-height: 1.14;
  color: var(--primary-white);
  text-align: center;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 16px;
    min-width: 171px;
    font-size: 16px;
    line-height: 1.12;
  }
  @media screen and (min-width: 1440px) {
    padding: 21px;
    min-width: 339px;
  }

  &:hover {
    color: var(--secondary-black);
  }
`;

export const StyledLogOutBtn = styled.button`
  background: var(--primary-green);
  border: none;
  border-radius: 6px;

  min-width: 137px;
  padding: 14px 18px;

  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-white);
  text-align: center;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 18px 39px;
    min-width: 192px;
    font-size: 16px;
    line-height: 1.12;
  }

  &:hover {
    background: var(--secondary-black);
  }
`;

export const StyledCancelBtn = styled.button`
  background: var(--light-gray);
  border-radius: 6px;
  border: 1px solid var(--light-gray);

  min-width: 137px;
  padding: 14px 18px;

  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-black);
  text-align: center;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 18px 39px;
    min-width: 192px;
    font-size: 16px;
    line-height: 1.12;
  }

  &:hover {
    border: 1px solid var(--primary-black);
    background: transparent;
  }
`;

export const StyledSeeAllBtn = styled.div`
  background: var(--primary-green);
  border-radius: 6px;
  border: none;

  min-width: 94px;
  padding: 10px 24px;

  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-white);
  text-align: center;

  cursor: pointer;

  &:hover {
    background: var(--secondary-black);
  }
`;

export const StyledOtherCatBtn = styled.div`
  background-color: transparent;
  border-radius: 18px 44px;
  border: 2px solid var(--primary-green);

  padding: 14px 24px;
  min-width: 195px;

  font-size: 14px;
  line-height: 1.5;
  color: var(--secondary-black);
  text-align: center;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 20px 39px;
    min-width: 239px;
    font-size: 16px;
  }

  &:hover {
    background-color: var(--primary-green);
    color: var(--primary-white);
  }
`;

export const StyledAddRecipeBtn = styled.button`
  min-width: 150px;
  padding: 10px 18px;

  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;

  background-color: transparent;
  border-radius: 18px 44px;
  border: 1px solid var(--primary-green);

  font-size: 10px;
  line-height: 1.5;
  color: var(--secondary-black);
  text-align: center;

  cursor: pointer;

  /* @media screen and (min-width: 768px) {
    padding: 18px 24px;
    min-width: 239px;
    font-size: 16px;
  } */

  &:hover {
    background-color: var(--primary-green);
    color: var(--primary-white);
  }
`;

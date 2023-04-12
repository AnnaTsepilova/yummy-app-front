import styled from 'styled-components';
import {
  StyledSearchGreenBtn,
  StyledSubscribeGreenBtn,
} from '../../Buttons/Buttons.styled';
import { ReactComponent as IconTr } from 'images/TrashIcon/Icon.svg';
import { ReactComponent as NotFoundRecipeImg } from 'images/Plugs/image.svg';

export const StyledNotFoundImg = styled(NotFoundRecipeImg)`
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  width: 343px;
  padding: 14px 9px;

  display: flex;
  gap: 14px;
  margin-right: auto;
  margin-left: auto;

  background: var(--white);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 24px;
    padding: 28px 24px;
    margin-right: 0;
    margin-left: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    gap: 54px;
    padding: 40px;
  }
`;

export const ImgWrapper = styled.div`
  width: 124px;
  height: 124px;

  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }

  @media screen and (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const RecipeImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  position: relative;

  padding-top: 6px;
  width: 187px;

  @media screen and (min-width: 768px) {
    width: 420px;
    padding-top: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 868px;
  }
`;

export const RecipeTitle = styled.h3`
  margin-bottom: 14px;

  width: 85%;

  font-weight: 500;
  font-size: 14px;
  line-height: 1;

  letter-spacing: -0.24px;

  color: var(--primary-gray);

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const RecipeText = styled.p`
  font-size: 8px;
  line-height: 1.25;

  letter-spacing: -0.02em;

  color: var(--primary-black);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const RecipeSubtitle = styled(RecipeText)`
  display: none;
  color: var(--primary-black);
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const RecipeTime = styled.p`
  position: absolute;
  bottom: 0;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;

  letter-spacing: -0.24px;

  color: var(--primary-gray);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const RecipeBtn = styled(StyledSearchGreenBtn)`
  position: absolute;
  bottom: 0;
  right: 0;

  min-width: 87px;
  padding: 6px 14px;

  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;

  transition: background-color var(--transition-function);

  background-color: ${props =>
    props.view === 'secondary'
      ? 'var(--secondary-black)'
      : 'var(--primary-green)'};

  &:hover {
    background-color: ${props =>
      props.view === 'secondary'
        ? 'var(--primary-green)'
        : 'var(--secondary-black)'};
  }

  color: var(--primary-white);

  @media screen and (min-width: 768px) {
    min-width: 138px;
    padding: 12px 32px;

    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 172px;
    padding: 18px 44px;

    font-size: 16px;
  }
`;

export const DeleteBtn = styled(StyledSubscribeGreenBtn)`
  position: absolute;
  top: 0;
  right: 0;

  min-width: 24px;
  height: 24px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.view === 'secondary'
      ? 'var(--background-light-green)'
      : 'var(--primary-green)'};

  transition: background-color var(--transition-function);

  &:hover {
    background-color: ${props =>
      props.view === 'secondary'
        ? 'var(--primary-green)'
        : 'var(--background-light-green)'};
  }

  @media screen and (min-width: 768px) {
    min-width: 38px;
    height: 38px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 44px;
    height: 44px;
  }
`;

export const StyledIcon = styled(IconTr)`
  stroke: ${props =>
    props.view === 'secondary'
      ? 'var(--secondary-black)'
      : 'var(--primary-white)'};
  width: 14px;
  height: 14px;

  transition: stroke var(--transition-function);

  ${DeleteBtn}:hover & {
    stroke: ${props =>
      props.view === 'secondary'
        ? 'var(--primary-white)'
        : 'var(--secondary-black)'};
  }

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
  }
`;

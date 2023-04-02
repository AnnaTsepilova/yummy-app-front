import styled from 'styled-components';
import {
  StyledSearchGreenBtn,
  StyledSubscribeGreenBtn,
} from '../../Buttons/Buttons.styled';
import TrashIcon from './TrashIcon';

export const StyledIcon = styled(TrashIcon)``;

export const Item = styled.li`
  width: 343px;
  padding: 14px 9px;

  display: flex;
  gap: 14px;

  background: #ffffff;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 24px;
    padding: 28px 24px;
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

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;

  letter-spacing: -0.24px;

  color: #3e4462;

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

  color: #23262a;

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

  color: #3e4462;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const RecipeBtn = styled(StyledSearchGreenBtn)`
  position: absolute;
  bottom: -14px;
  right: 0;

  width: 87px;
  padding: 20px 14px;

  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;

  color: #fafafa;

  @media screen and (min-width: 768px) {
    bottom: -21px;
    width: 138px;
    padding: 30px 28px;

    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    bottom: -32px;
    width: 172px;
    padding: 52px 38px;

    font-size: 16px;
  }
`;

export const DeleteBtn = styled(StyledSubscribeGreenBtn)`
  position: absolute;
  top: 0;
  right: 0;

  width: 24px;
  height: 24px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }
`;

// Link = styled(RecipeBtn)``;

// export default Link;

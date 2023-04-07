import styled from 'styled-components';
import img from 'images/Search/not-found-img.png';

export const DivContainer = styled.div`
  position: relative;
  margin-bottom: 400px;
  width: 345px;
  height: 192px;

  @media screen and (min-width: 768px) {
    width: 718px;
    height: 240px;
  }

  @media screen and (min-width: 1440px) {
    width: 1180px;
    height: 240px;
  }
`;

export const ShoppingItemList = styled.ul`
  .ShoppingItemList:last-child {
    padding-bottom: 100px;
  }
  @media screen and (min-width: 768px) {
    .ShoppingItemList:last-child {
      padding-bottom: 200px;
    }
  }
  @media screen and (min-width: 1440px) {
    .ShoppingItemList:last-child {
      padding-bottom: 195px;
    }
  }
  .ShoppingItemList:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const EmptyShoppingList = styled.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const EmptyShoppingListImg = styled.div`
  width: 208px;
  height: 133px;
  margin: auto;
  /* background-image: url('images/Search/not-found-img.png'); */
  background-image: url(${img});
  background-size: contain;
  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    margin-bottom: 43px;
    width: 350px;
    height: 225px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 70px;
  }
`;

export const EmptyShoppingListText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.02em;
  margin-bottom: 101px;
  opacity: 0.5;
  color: var(--secondaryTextColor);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

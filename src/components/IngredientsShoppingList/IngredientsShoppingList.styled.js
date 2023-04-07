import styled from 'styled-components';
import img from 'images/Search/not-found-img.png';

export const DivContainer = styled.div`
  position: relative;
  /* margin-bottom: 400px; */
  width: 345px;
  height: 192px;
  /* background-image: url('../../assets/images/SearchBackground/image1green.png'),
    var(--second-image)
      url('../../assets/images/SearchBackground/image2green.png');
  background-repeat: no-repeat;
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-position: left 105px top 14px, left 231px top 79px,
    left 332px top 46px; */

  @media screen and (min-width: 768px) {
    width: 718px;
    height: 240px;
    /* background-image: url('../../assets/images/SearchBackground/image3green.png'),
      var(--second-image2),
      url('../../assets/images/SearchBackground/image4green.png');
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 189px top 17px, left 407px top 87px,
      left 695px top 31px; */
  }

  @media screen and (min-width: 1440px) {
    width: 1180px;
    height: 240px;
    /* background-image: url('../../assets/images/SearchBackground/image3green.png'),
      var(--second-image2),
      url('../../assets/images/SearchBackground/image4green.png');
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 228px top 56px, left 706px top 139px,
      left 1149px top 69px; */
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

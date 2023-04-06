import React from 'react';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  BGDots,
  ShoppingItemList,
  EmptyShoppingList,
  DivContainer,
  EmptyShoppingListImg,
  EmptyShoppingListText,
} from './IngredientsShoppingList.styled';
import { patchShoppingList, getShoppingList } from 'service/API/dishesApi';
import TitleShoppingList from './TitleShoppingList/TitleShoppingList';
import Loader from 'components/Loader/Loader';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import Title from 'components/IngredientsShoppingList/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserShoppingList,
  removeFromShoppingList,
} from 'redux/userRecipes/userResipesOperations';
import {
  selectIsLoading,
  selectShoppingList,
} from 'redux/userRecipes/userRecipesSelectors';

const IngredientsShoppingList = () => {
  const [list, setList] = useState({ id: '', measure: '' });
  // const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteIngridient = async (id, item, e) => {
    console.log(id, item);
    // if (e.target.disabled) return;
    // e.target.disabled = true;
    // await patchShoppingList({ productId: Id, measure: item })
    //   .then(({ shoppingList }) => {
    //     setList(shoppingList);
    //     Notify.success('You removed ingridient from shopping list', {
    //       NotiflixId: '1234',
    //     });
    //   })
    //   .catch(error => console.log(error.message));
  };

  useEffect(() => {
    dispatch(getUserShoppingList());
  }, [dispatch]);

  console.log(shoppingList);
  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(async () => {
  //     await getShoppingList()
  //       .then(({ shoppingList }) => {
  //         setList(shoppingList);
  //         console.log(shoppingList);
  //       })
  //       .catch(error => console.log(error));
  //     setIsLoading(false);
  //   }, 1000);
  //   return;
  // }, []);

  // console.log(list);
  console.log(shoppingList.length);
  return (
    <DivContainer>
      <BGDots />
      <Title text={'Shopping list'} />
      <TitleShoppingList />
      {isLoading ? (
        <Loader />
      ) : shoppingList.length > 0 ? (
        <ShoppingItemList>
          {shoppingList.map(({ thb, ttl, measure, id }, index) => (
            <ShoppingItem
              key={nanoid()}
              image={thb}
              name={ttl}
              measure={measure}
              id={id}
              onDelete={(item, e) => handleDeleteIngridient(id, item, e)}
            />
          ))}
        </ShoppingItemList>
      ) : (
        <EmptyShoppingList>
          <EmptyShoppingListImg />
          <EmptyShoppingListText>Shopping list is empty</EmptyShoppingListText>
        </EmptyShoppingList>
      )}
    </DivContainer>
  );
};

export default IngredientsShoppingList;

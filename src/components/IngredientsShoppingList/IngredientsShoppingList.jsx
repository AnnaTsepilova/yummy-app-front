import React from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  BGDots,
  ShoppingItemList,
  EmptyShoppingList,
  DivContainer,
  EmptyShoppingListImg,
  EmptyShoppingListText,
} from './IngredientsShoppingList.styled';
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
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteIngridient = (id, item, e) => {
    const list = {
      id: id,
      measure: item,
    };
    // console.log(list);
    dispatch(removeFromShoppingList(list));
  };
  useEffect(() => {
    dispatch(getUserShoppingList());
  }, [dispatch]);

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

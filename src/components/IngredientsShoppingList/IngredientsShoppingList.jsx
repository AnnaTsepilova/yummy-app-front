import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';

import Loader from 'components/Loader/Loader';
import TitleShoppingList from 'components/IngredientsShoppingList/TitleShoppingList/TitleShoppingList';
import ShoppingItem from 'components/IngredientsShoppingList/ShoppingItem/ShoppingItem';

import {
  ShoppingItemList,
  EmptyShoppingList,
  DivContainer,
  EmptyShoppingListImg,
  EmptyShoppingListText,
} from 'components/IngredientsShoppingList/IngredientsShoppingList.styled';

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
    <>
      <DivContainer>
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
            <EmptyShoppingListText>
              Shopping list is empty
            </EmptyShoppingListText>
          </EmptyShoppingList>
        )}
      </DivContainer>
    </>
  );
};

export default IngredientsShoppingList;

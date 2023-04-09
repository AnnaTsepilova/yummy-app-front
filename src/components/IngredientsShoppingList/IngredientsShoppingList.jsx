import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';

import Loader from 'components/Loader/Loader';
import NotFound from 'components/NotFound/NotFound';
import TitleShoppingList from 'components/IngredientsShoppingList/TitleShoppingList/TitleShoppingList';
import ShoppingItem from 'components/IngredientsShoppingList/ShoppingItem/ShoppingItem';

import {
  BoxSL,
  ListSL,
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
    dispatch(removeFromShoppingList(list));
  };
  useEffect(() => {
    dispatch(getUserShoppingList());
  }, [dispatch]);

  return (
    <>
      <BoxSL>
        <TitleShoppingList />
        {isLoading ? (
          <Loader />
        ) : shoppingList.length > 0 ? (
          <ListSL>
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
          </ListSL>
        ) : (
          <NotFound text={'Shopping list is empty.'} />
        )}
      </BoxSL>
    </>
  );
};

export default IngredientsShoppingList;

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

const IngredientsShoppingList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDeleteIngridient = async (productId, item, e) => {
    if (e.target.disabled) return;
    e.target.disabled = true;
    await patchShoppingList({ productId: productId, measure: item })
      .then(({ shoppingList }) => {
        setList(shoppingList);
        Notify.success('You removed ingridient from shopping list', {
          NotiflixId: '1234',
        });
      })
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      await getShoppingList()
        .then(({ shoppingList }) => {
          setList(shoppingList);
        })
        .catch(error => console.log(error));
      setIsLoading(false);
    }, 1000);
    return;
  }, []);

  return (
    <DivContainer>
      <BGDots />
      <Title text={'Shopping list'} />
      <TitleShoppingList />
      {isLoading ? (
        <Loader />
      ) : list.length > 0 ? (
        <ShoppingItemList>
          {list.map(({ thumb, title, messure, productId }, index) => (
            <ShoppingItem
              key={nanoid()}
              image={thumb}
              name={title}
              messure={messure}
              id={productId}
              onDelete={(item, e) => handleDeleteIngridient(productId, item, e)}
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

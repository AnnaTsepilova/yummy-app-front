import React from 'react'
import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { listUnits } from 'components/AddRecipeForm/AddRecipeForm.const';
import {getIngredientsList} from 'service/API/dishesApi';
import { CloseIconButton, IncIconButton, DecrIconButton,ListIngredientsItem, DeleteButton, InputIngredWraper, TitleWraper, FormWrapper, TitleStyled, IncDecWraper, IncDecButton, IncDecCounter, SelectIngredStyled, SelectIngredUnit } from './RecipeIngredientsFields.styled'

const RecipeIngredientsFields = ({userList, handleIncIngredient, handleDecIngredient, handleOnDeleteContact, handleOnChangeIngName, handleOnChangeIngUnit}) => {
  const {userIngredientsList} = userList;
  const [ingredientList, setIngredientList] = useState([]);

  function initIngredientFunc(list) { 
    const tmp = list.map(e => {
      return ({ value: e._id, label: `${e.ttl}` })
    });
    setIngredientList(tmp);
  };

    useEffect(() => {
    try {
      getIngredientsList().then(initIngredientFunc);
    } catch (error) {
       Notify.failure('Error database connection!', {
            fontSize: '16px',
            width: '350px',
            padding: '10px',
          });
    }

    }, []);
  
  return (
    <>
      <FormWrapper>
        <TitleWraper>
              <TitleStyled>Ingredients</TitleStyled>
          <IncDecWraper>
              <IncDecButton type='button' onClick={handleDecIngredient}>
                  <DecrIconButton/>
              </IncDecButton>
              <IncDecCounter>{ userList.length}</IncDecCounter>
              <IncDecButton type='button' onClick={handleIncIngredient}>
                  <IncIconButton/>
              </IncDecButton>
          </IncDecWraper>
        </TitleWraper>  
          <ul>
            {userIngredientsList.map((e, index) => {
              return (
                <ListIngredientsItem key={e._id}>
                    <InputIngredWraper>
                          <SelectIngredStyled
                            options={ingredientList}
                            isSearchable={true}
                            classNamePrefix="react-select"
                            onChange={e => { handleOnChangeIngName(e, index) }}
                          />
                          <SelectIngredUnit
                            options={listUnits}
                            isSearchable={false}
                            classNamePrefix="react-select"
                            onChange={e => { handleOnChangeIngUnit(e,index) }}
                          />
                    <DeleteButton onClick={handleOnDeleteContact}>
                          <CloseIconButton/>
                    </DeleteButton>
                    </InputIngredWraper>
                </ListIngredientsItem>
              )
            })}
          </ul>


      </FormWrapper>
    </>
  )
}

export default RecipeIngredientsFields

import { useDispatch } from 'react-redux';
// import { deleteIngredient, updateShoppinList } from 'redux/shopping/operations';
import {
  Box,
  Svg,
} from 'components/RecipeInngredientsList/CheckBox/CheckBox.styled';
import {
  addUserShoppingList,
  removeFromShoppingList,
} from 'redux/userRecipes/userRecipesOperations'; // eslint-disable-line
import * as ReactDOMServer from 'react-dom/server';
import { Notify } from 'notiflix';
import { useState } from 'react';
// import { ReactComponent as TrashImage } from 'images/Plugs/trash.svg';

const CustomCheckbox = ({ recipeId, ingredientId, measure, isChecked }) => {
  const elem = document.getElementById(ingredientId);
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const dispatch = useDispatch(); // eslint-disable-line
  const handleChange = async (e) => {
    if (check || check1) return;
    if (isChecked) {
      if (elem !== null && elem.firstChild !== null) {
        elem.firstChild.innerHTML = ''
      }
      setCheck1(true);
      Notify.success('Ingredient was deleted from shopping list.', {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
      const arr = [];
      const reqObj = {};
      reqObj['measure'] = measure;
      reqObj['ingredientId'] = ingredientId;
      arr.push(reqObj, recipeId);
      await dispatch(removeFromShoppingList(arr));
      return setCheck1(false);
    }
    const buttonLoaderHtml = ReactDOMServer.renderToStaticMarkup(
      <Svg
        id={measure}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8928 0.746184C14.4196 -0.0309226 15.4767 -0.233794 16.2538 0.293059C17.0309 0.819911 17.2338 1.87698 16.7069 2.65409L7.48678 16.2538C6.81241 17.2485 5.34699 17.2485 4.67262 16.2538L0.293059 9.79396C-0.233794 9.01686 -0.0309226 7.95979 0.746184 7.43294C1.52329 6.90608 2.58036 7.10896 3.10721 7.88606L6.0797 12.2705L13.8928 0.746184Z"
          fill="#8BAA36"
        />
      </Svg>
    );
    elem?.insertAdjacentHTML('beforeend', buttonLoaderHtml);
    setCheck(true);
    Notify.success('Ingredient added to shopping list.', {
      fontSize: '16px',
      width: '350px',
      padding: '10px',
    });
    const arr = [];
    const reqObj = {};
    reqObj[ingredientId] = measure;
    arr.push(reqObj, recipeId);
    await dispatch(addUserShoppingList(arr));
    elem?.removeChild(elem.firstChild);
    return setCheck(false);
  }
  return (
    <Box id={ingredientId} onClick={handleChange}>
      {(isChecked || (elem?.firstChild && !check)) && (
        <Svg
          id={measure}
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8928 0.746184C14.4196 -0.0309226 15.4767 -0.233794 16.2538 0.293059C17.0309 0.819911 17.2338 1.87698 16.7069 2.65409L7.48678 16.2538C6.81241 17.2485 5.34699 17.2485 4.67262 16.2538L0.293059 9.79396C-0.233794 9.01686 -0.0309226 7.95979 0.746184 7.43294C1.52329 6.90608 2.58036 7.10896 3.10721 7.88606L6.0797 12.2705L13.8928 0.746184Z"
            fill="#8BAA36"
          />
        </Svg>
      )}
    </Box>
  );
};

export default CustomCheckbox;

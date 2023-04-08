import { useDispatch, useSelector } from 'react-redux';
// import { deleteIngredient, updateShoppinList } from 'redux/shopping/operations';
import { Box } from './CheckBox.styled';
import {
  selectShoppingList,
} from 'redux/userRecipes/userRecipesSelectors';
import { addUserShoppingList, removeFromShoppingList } from 'redux/userRecipes/userResipesOperations'; // eslint-disable-line

const CustomCheckbox = ({ recipeId, ingredientId, measure, isChecked }) => {
  const dispatch = useDispatch(); // eslint-disable-line
  const shoppingList = useSelector(selectShoppingList);
  const check = () => {
    const recipesId = shoppingList
      .filter(item => item.id.toString() === ingredientId)
      .flatMap(item => item.recipesId);
    if (recipesId.includes(recipeId)) {
      return true;
    }
    return false;
  }

  const handleChange = () => {
    const checked = check();
    if (checked) {
      const arr = [];
      const reqObj = {};
      reqObj['measure'] = measure;
      reqObj['ingredientId'] = ingredientId;
      arr.push(reqObj, recipeId);
      return dispatch(removeFromShoppingList(arr));
    }
    const arr = [];
    const reqObj = {};
    reqObj[ingredientId] = measure;
    arr.push(reqObj, recipeId);
    return dispatch(addUserShoppingList(arr));
  };
  return <Box onClick={handleChange}>{check() && <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8928 0.746184C14.4196 -0.0309226 15.4767 -0.233794 16.2538 0.293059C17.0309 0.819911 17.2338 1.87698 16.7069 2.65409L7.48678 16.2538C6.81241 17.2485 5.34699 17.2485 4.67262 16.2538L0.293059 9.79396C-0.233794 9.01686 -0.0309226 7.95979 0.746184 7.43294C1.52329 6.90608 2.58036 7.10896 3.10721 7.88606L6.0797 12.2705L13.8928 0.746184Z" fill="#8BAA36" />
  </svg>}</Box>;
};

export default CustomCheckbox;

import { useDispatch, useSelector } from 'react-redux';
// import { deleteIngredient, updateShoppinList } from 'redux/shopping/operations';
import { SvgCheck, Box } from './CheckBox.styled';
import {
  selectRecipe,
  selectShoppingList,
} from 'redux/userRecipes/userRecipesSelectors';
import { addUserShoppingList } from 'redux/userRecipes/userResipesOperations'; // eslint-disable-line
const { useState } = require('react');

const CustomCheckbox = ({ recipeId, ingredientId, measure, isChecked }) => {
  const dispatch = useDispatch(); // eslint-disable-line
  console.log(measure);
  const [checked, setChecked] = useState(false); // eslint-disable-line
  const shoppingList = useSelector(selectShoppingList);
  const recipe = useSelector(selectRecipe); // eslint-disable-line
  const recipesId = shoppingList // eslint-disable-line
    .filter(item => item.id.toString() === ingredientId)
    .flatMap(item => item.recipesId);

  const handleChange = () => {
    console.log(ingredientId);
    const recipesId = shoppingList
      .filter(item => item.id.toString() === ingredientId)
      .flatMap(item => item.recipesId);
    console.log(recipesId);
    // const measure = shoppingList
    //   .filter(item => item._id.toString() === ingredientId)
    //   .flatMap(item => item.measure);

    // const dada = shoppingList.filter(
    //   item => item._id.toString() === ingredientId
    // );
    console.log(measure);
    // console.log(ingredientId);
    // console.log('dada', dada);

    // console.log(obj);
    // const arr = [];
    // const reqObj = {};
    // reqObj[ingredientId] = measure;
    // arr.push(reqObj, recipeId);
    // dispatch(addUserShoppingList(arr));
    // console.log(request);
    console.log(recipesId.includes(recipeId));
  };
  // if (!checked) {
  //   dispatch(updateShoppinList({ recipeId, ingredientId }));
  // } else {
  //   dispatch(deleteIngredient(ingredientId));
  // }
  // setChecked(!checked);

  return <Box onClick={handleChange}>{checked && <SvgCheck />}</Box>;
};

export default CustomCheckbox;

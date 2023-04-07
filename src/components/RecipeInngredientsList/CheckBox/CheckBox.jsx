import { useDispatch } from 'react-redux';
// import { deleteIngredient, updateShoppinList } from 'redux/shopping/operations';
import { SvgCheck, Box } from './CheckBox.styled';
const { useState } = require('react');

const CustomCheckbox = ({ recipeId, ingredientId, isChecked }) => {
  //   const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    // if (!checked) {
    //   dispatch(updateShoppinList({ recipeId, ingredientId }));
    // } else {
    //   dispatch(deleteIngredient(ingredientId));
    // }
    // setChecked(!checked);
  };

  return <Box onClick={handleChange}>{checked && <SvgCheck />}</Box>;
};

export default CustomCheckbox;
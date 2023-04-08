import React from 'react';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Title } from 'pages/AddRecipePage/AddRecipePage.styled';

const AddRecipePage = () => {
  return (
    <>
      <Title>Add recipe</Title>
      <AddRecipeForm />
    </>
  );
};

export default AddRecipePage;

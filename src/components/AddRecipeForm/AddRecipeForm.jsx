import React from 'react';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import {
  StyledForm,
  WrapperSubmitButton,
  WrapperPage,
  WrapperPopularRecipe,
} from './AddRecipeForm.styled';
import { SearchBlackBtn } from 'components/Buttons/Buttons';
import { TitleStyled } from 'components/PopularRecipe/PopularRecipe.style';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import { WrapperSocialLinks } from './SocialLinks/SocialLinks.styled';
import SocialLinks from './SocialLinks/SocialLinks';
import {
  getPopularRecipe,
  addRecipe,
  addRecipeImg,
} from 'service/API/dishesApi';

const AddRecipeForm = () => {
  const [popularRecipeList, setPopularRecipeList] = useState([]);
  const [imgURL, setImageURL] = useState('');
  const [itemTitleRecipe, setItemTitleRecipe] = useState('');
  const [aboutRecipe, setAboutRecipe] = useState('');
  const [category, setCategory] = useState({ value: '', label: '' });
  const [cookingTimeRecipe, setCookingTimeRecipe] = useState({
    value: '',
    label: '',
  });
  const [userIngredientsList, setUserIngredientList] = useState([
    {
      _id: nanoid(),
      id: '',
      name: '',
      unitCount: '',
      unit: '',
    },
  ]);
  const [recipePreparation, setRecipePreperation] = useState('');

  function initPopularFunc(list) {
    setPopularRecipeList(list);
  }

  useEffect(() => {
    try {
      getPopularRecipe().then(initPopularFunc);
    } catch (error) {
      Notify.failure('Error database connection!', {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
    }
  }, []);

  const handleIncIngredient = () => {
    const ingredient = {
      _id: nanoid(),
      id: '',
      name: '',
      unitCount: '',
      unit: '',
    };
    setUserIngredientList([ingredient, ...userIngredientsList]);
  };

  const handleDecIngredient = () => {
    const newIngredientsList = [...userIngredientsList];
    newIngredientsList.shift();
    setUserIngredientList(newIngredientsList);
  };

  const handleOnDeleteIngredient = index => {
    const newIngredientsList = [...userIngredientsList];
    newIngredientsList.splice(index, 1);
    setUserIngredientList(newIngredientsList);
  };

  const handleOnChangeIngName = (e, i) => {
    const tmpList = [...userIngredientsList];
    tmpList[i].id = e.value;
    tmpList[i].name = e.label;
    setUserIngredientList(tmpList);
  };

  const handleOnChangeIngUnit = (e, i) => {
    const tmpList = [...userIngredientsList];
    tmpList[i].unit = e.value;
    setUserIngredientList(tmpList);
  };

  const handleOnChangeUnitCount = (e, i) => {
    const tmpList = [...userIngredientsList];
    tmpList[i].unitCount = e;
    setUserIngredientList(tmpList);
  };

  let initialValues = {
    image: '',
    itemTitleRecipe: '',
    aboutRecipe: '',
  };

  const resetForm = () => {
    setImageURL('');
    setItemTitleRecipe('');
    setAboutRecipe('');
    setCategory({ value: '', label: '' });
    setCookingTimeRecipe({ value: '', label: '' });
    setUserIngredientList([
      {
        _id: nanoid(),
        id: '',
        name: '',
        unitCount: '',
        unit: '',
      },
    ]);
    setRecipePreperation('');
  };

  const handleOnSubmit = async () => {
    const recipeItem = {
      title: itemTitleRecipe,
      description: aboutRecipe,
      recipeImage: imgURL,
      category: category.value,
      cockingTime: cookingTimeRecipe.value,
      ingredients: userIngredientsList.map(e => {
        return { [`${e.id}`]: `${e.unitCount} ${e.unit}` };
      }),
      preparation: recipePreparation,
    };

    // console.log(recipeItem);
    // resetForm();
    try {
      addRecipe(recipeItem).then(() => {
        Notify.success('Recipe add to database.', {
          fontSize: '16px',
          width: '350px',
          padding: '10px',
        });
        resetForm();
      });
    } catch (error) {
      Notify.failure('Error database connection!', {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
    }
  };

  const handleOnImgSelect = async e => {
    const localFile = e.target.files[0];
    const newURL = await addRecipeImg(localFile);
    if (newURL) {
      setImageURL(newURL);
      return;
    }
    setImageURL('');
  };

  return (
    <>
      <WrapperPage>
        <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
          <StyledForm autoComplete="off">
            <RecipeDescriptionFields
              dataField={{
                imgURL,
                itemTitleRecipe,
                aboutRecipe,
                category,
                cookingTimeRecipe,
              }}
              handleOnImgSelect={handleOnImgSelect}
              handleOnTitleRecipe={setItemTitleRecipe}
              handleOnAboutRecipe={setAboutRecipe}
              handleOnCategory={setCategory}
              handleOnCookingTimeRecipe={setCookingTimeRecipe}
            />
            <RecipeIngredientsFields
              userList={{ userIngredientsList }}
              handleIncIngredient={handleIncIngredient}
              handleDecIngredient={handleDecIngredient}
              handleOnDeleteIngredient={handleOnDeleteIngredient}
              handleOnChangeIngName={handleOnChangeIngName}
              handleOnChangeIngUnit={handleOnChangeIngUnit}
              handleOnChangeUnitCount={handleOnChangeUnitCount}
            />
            <RecipePreparationFields
              dataField={recipePreparation}
              handleOnRecipePreperation={setRecipePreperation}
            />
            <WrapperSubmitButton>
              <SearchBlackBtn type="submit">Add</SearchBlackBtn>
            </WrapperSubmitButton>
          </StyledForm>
        </Formik>
        <WrapperPopularRecipe>
          <WrapperSocialLinks>
            <TitleStyled>Follow us</TitleStyled>
            <SocialLinks />
          </WrapperSocialLinks>
          <PopularRecipe popularRecipeList={popularRecipeList} />
        </WrapperPopularRecipe>
      </WrapperPage>
    </>
  );
};

export default AddRecipeForm;

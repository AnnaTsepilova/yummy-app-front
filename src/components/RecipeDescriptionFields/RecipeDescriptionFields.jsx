import React from 'react';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getCategoryListAPI } from 'service/API/commonRecipesAPI';
import { listTimeRecipe } from 'components/AddRecipeForm/AddRecipeForm.const';

import {
  ImgStyled,
  NoImageStyled,
  ImgLabel,
  FormWrapper,
  FieldStyled,
  SelectStyled,
  ImageInput,
  WrapperFieldsInput,
  WrapperSelect,
  LabelSelectStyled,
} from './RecipeDescriptionFields.styled';

const RecipeDescriptionFields = ({
  dataField,
  handleOnImgSelect,
  handleOnTitleRecipe,
  handleOnAboutRecipe,
  handleOnCategory,
  handleOnCookingTimeRecipe,
}) => {
  const { imgURL, itemTitleRecipe, aboutRecipe, category, cookingTimeRecipe } =
    dataField;
  const [categoryList, setCategoryList] = useState([]);

  function initCategoryFunc(list) {
    const newList = list.map(e => {
      return { value: `${e}`, label: `${e}` };
    });
    setCategoryList(newList);
  }

  useEffect(() => {
    try {
      getCategoryListAPI().then(initCategoryFunc);
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
        <ImgLabel htmlFor="image">
          {imgURL ? <ImgStyled src={imgURL} /> : <NoImageStyled />}
          <ImageInput
            as="input"
            id="image"
            name="image"
            type="file"
            onChange={handleOnImgSelect}
            required
          ></ImageInput>
        </ImgLabel>
        <WrapperFieldsInput>
          <FieldStyled
            as="input"
            name="itemTitleRecipe"
            value={itemTitleRecipe}
            placeholder="Enter item title"
            onChange={e => {
              handleOnTitleRecipe(e.currentTarget.value);
            }}
            required
          />
          <FieldStyled
            as="input"
            name="aboutRecipe"
            value={aboutRecipe}
            placeholder="Enter about recipe"
            onChange={e => {
              handleOnAboutRecipe(e.currentTarget.value);
            }}
            required
          />
          <WrapperSelect>
            <LabelSelectStyled>Category</LabelSelectStyled>
            <SelectStyled
              options={categoryList}
              isSearchable={false}
              value={category}
              classNamePrefix="react-select"
              onChange={handleOnCategory}
              required
            />
          </WrapperSelect>
          <WrapperSelect>
            <LabelSelectStyled>Cooking time</LabelSelectStyled>
            <SelectStyled
              options={listTimeRecipe}
              isSearchable={false}
              value={cookingTimeRecipe}
              placeholder="Cooking time"
              classNamePrefix="react-select"
              onChange={handleOnCookingTimeRecipe}
              required
            />
          </WrapperSelect>
        </WrapperFieldsInput>
      </FormWrapper>
    </>
  );
};

export default RecipeDescriptionFields;

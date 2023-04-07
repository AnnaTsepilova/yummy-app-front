import React from 'react';
import {
  MainBox,
  Title,
  Box,
  List,
  Item,
  SpanBox,
  Span,
  Text,
  Img,
} from './RecipePreparation.styled';
import { nanoid } from '@reduxjs/toolkit';

const RecipePreparation = ({ preview, title, instructions }) => {
  const cleanedInstructions = instructions?.replace(/^\d+\)\s*/gm, '');
  const sentences = cleanedInstructions?.split(/(?:\.|\?|!)\s/g);
  const steps = sentences?.map(sentence =>
    sentence.replace(/^\d+\)/, '').trim()
  );

  return (
    <MainBox>
      <Title>Recipe Preparation</Title>
      <Box>
        <List>
          {steps?.map((el, idx) => (
            <Item key={nanoid()}>
              <SpanBox>
                <Span>{idx + 1}</Span>
              </SpanBox>
              <Text>{el}</Text>
            </Item>
          ))}
        </List>
        <Img alt={title} src={preview} width={343} />
      </Box>
    </MainBox>
  );
};

export default RecipePreparation;

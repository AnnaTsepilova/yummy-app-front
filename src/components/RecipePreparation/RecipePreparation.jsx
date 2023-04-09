import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import {
  MainBox,
  Box,
  Title,
  List,
  Item,
  SpanBox,
  Span,
  Text,
  Img,
} from './RecipePreparation.styled';

const RecipePreparation = ({ preview, title, instructions }) => {
  const cleanedInstructions = instructions?.replace(/^\d+\)\s*/gm, '');
  const sentences = cleanedInstructions?.split(/(?:\.|\?|!)\s/g);
  const steps = sentences?.map(sentence =>
    sentence.replace(/^\d+\)/, '').trim()
  );

  return (
    <MainBox>
      <Box>
        <Title>Recipe Preparation</Title>
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
      </Box>
      <Img alt={title} src={preview} width={433} />
    </MainBox>
  );
};

export default RecipePreparation;

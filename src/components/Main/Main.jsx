import React from 'react';
import { Hero, Caption, Wrapper, Description } from './Main.styled';

const Main = () => {
  return (
    <Hero>
      <Caption>
        <span>So</span>Yummy
      </Caption>
      <Wrapper>
        <Description>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Description>
      </Wrapper>
    </Hero>
  );
};

export default Main;

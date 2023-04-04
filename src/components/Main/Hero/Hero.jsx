import React from 'react';
import { Section, Caption, Wrapper, Description } from './Hero.styled';

const Hero = () => {
  return (
    <Section>
      <Caption>
        <span>So</span>Yummy
      </Caption>
      <Wrapper>
        <Description>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Description>
      </Wrapper>
    </Section>
  );
};

export default Hero;

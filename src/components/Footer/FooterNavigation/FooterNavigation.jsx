import React from 'react';

import TextFooter from './TextFooter/TextFooter';
import Navigation from '../../Navigation/Navigation';
import SubscribeForm from '../../SubscribeForm/SubscribeForm';

import {
  FooterNavigationDiv,
  SubscribeContainer,
  SubscribeTitle,
  SubscribeText,
} from './FooterNavigation.styled';

const FooterNavigation = () => {
  return (
    <FooterNavigationDiv>
      <TextFooter />
      <Navigation />
      <SubscribeContainer>
        <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
        <SubscribeText>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </SubscribeText>
        <SubscribeForm />
      </SubscribeContainer>
    </FooterNavigationDiv>
  );
};

export default FooterNavigation;

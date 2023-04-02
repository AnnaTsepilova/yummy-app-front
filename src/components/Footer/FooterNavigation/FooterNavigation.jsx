import React from 'react';

import TextFooter from './TextFooter/TextFooter';
import Navigation from '../../Navigation/Navigation';
import SubscribeForm from '../../SubscribeForm/SubscribeForm';

import { FooterNavigationDiv } from './FooterNavigation.styled';

const FooterNavigation = () => {
  return (
    <FooterNavigationDiv>
      <TextFooter />
      <Navigation />
      <SubscribeForm />
    </FooterNavigationDiv>
  );
};

export default FooterNavigation;

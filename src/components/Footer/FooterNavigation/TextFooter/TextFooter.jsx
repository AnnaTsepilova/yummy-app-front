import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'components/Logo/Logo';

import { LogoText, FooterLeftText } from './TextFooter.styled';

const TextFooter = () => {
  return (
    <div>
      <LogoText>
        <NavLink to="/main">
          <Logo inv width={'44px'} height={'44px'} />
        </NavLink>
        <span>So Yummy</span>
      </LogoText>
      <FooterLeftText>
        <li>Database of recipes that can be replenished </li>
        <li>Flexible search for desired and unwanted ingredients</li>
        <li>Ability to add your own recipes with photos</li>
        <li>Convenient and easy to use</li>
      </FooterLeftText>
    </div>
  );
};

export default TextFooter;

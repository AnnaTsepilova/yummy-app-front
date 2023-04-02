import React from 'react';

import FooterForm from './FooterForm/FooterForm';

import {
  FooterRightText,
  FooterSubscribeFormDiv,
} from './SubscribeForm.styled';

const SubscribeForm = () => {
  return (
    <FooterRightText>
      <h3>Subscribe to our Newsletter</h3>
      <p>
        Subscribe to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <FooterSubscribeFormDiv>
        <FooterForm />
      </FooterSubscribeFormDiv>
    </FooterRightText>
  );
};

export default SubscribeForm;

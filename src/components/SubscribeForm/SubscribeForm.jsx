import React, { useState } from 'react';
import {
  FormWrapper,
  Form,
  Input,
  Button,
  InputWrap,
} from './subscribeForm.styled';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    setEmail(event.target.value);
    setIsDisabled(event.target.value === '');
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <InputWrap>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            autoComplete="off"
          />
        </InputWrap>
        <Button type="submit" disabled={isDisabled}>
          Subcribe
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default SubscribeForm;

import React, { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post('https://y-3wt8.onrender.com/api/subscribe/', {
        email,
      });
      Notiflix.Notify.success('Great! You signed up!');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Notiflix.Notify.info('A user with this email is already signed');
      } else {
        Notiflix.Notify.failure('There was an error, try again later');
      }
    }
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
          Subscribe
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default SubscribeForm;

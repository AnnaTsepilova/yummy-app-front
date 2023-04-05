import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as authOperations from 'redux/auth/authOperations';

import iconUser from 'images/AuthImages/icon-user-mob.svg';
import iconMail from 'images/AuthImages/icon-mail-mob.svg';
import iconLock from 'images/AuthImages/icon-lock-mob.svg';
import {
  FormContainer,
  FormWrapper,
  FormTitle,
  Form,
  FormInput,
  FormButton,
  FormSwitch,
  FormLink,
  InputWrap,
} from 'components/RegisterForm/RegisterForm.styled';

const RegisterForm = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/signin';

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  /* eslint-disable-next-line */
  const [emailInvalid, setEmailInvalid] = useState(false);
  /* eslint-disable-next-line */
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;

    if (isLogin) {
      switch (name) {
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    } else {
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
      // handleValidation(event);
    }
  };

  const handleSubmitSignUp = event => {
    event.preventDefault();
    // handleValidation(event);
    const data = new FormData(event.currentTarget);
    console.log(data.get('name'));
    dispatch(
      authOperations.signUp({
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
      })
    ).then(result => {
      if (result.type === 'auth/signup/rejected') {
        return;
      }
      Notify.success('Your registration is successful', {
        fontSize: '16px',
        width: '350px',
        padding: '10px',
      });
      dispatch(
        authOperations.signIn({
          email: data.get('email'),
          password: data.get('password'),
        })
      );
      reset();
    });
  };

  const handleSubmitSignIn = event => {
    event.preventDefault();
    // handleValidation(event);
    const data = new FormData(event.currentTarget);

    dispatch(
      authOperations.signIn({
        email: data.get('email'),
        password: data.get('password'),
      })
    ).then(result => {
      if (result.type === 'auth/register/rejected') {
        return;
      }
      reset();
    });
  };

  return (
    <>
      <FormContainer>
        <FormWrapper>
          <FormTitle>{isLogin ? 'Sign In' : 'Registration'}</FormTitle>
          <Form
            className={isLogin ? 'signin' : ''}
            onChange={handleChange}
            onSubmit={isLogin ? handleSubmitSignIn : handleSubmitSignUp}
            autoComplete="on"
          >
            {!isLogin && (
              <InputWrap iconUrl={iconUser}>
                <FormInput placeholder="Name" />
              </InputWrap>
            )}
            <InputWrap iconUrl={iconMail}>
              <FormInput placeholder="Email" />
            </InputWrap>
            <InputWrap iconUrl={iconLock}>
              <FormInput placeholder="Password" />
            </InputWrap>
            <FormButton>{isLogin ? 'Sign in' : 'Sign up'}</FormButton>
          </Form>
        </FormWrapper>
        <FormSwitch>
          <FormLink exact to={isLogin ? '/register' : '/signin'}>
            {isLogin ? 'Registration' : 'Sign in'}
          </FormLink>
        </FormSwitch>
      </FormContainer>
    </>
  );
};

export default RegisterForm;

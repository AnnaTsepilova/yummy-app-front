import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
} from './registerForm.styled';

const RegisterForm = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/signin';
  const [isRegistration, setIsRegistration] = useState(!isLogin);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <FormContainer>
        <FormWrapper>
          <FormTitle>{isLogin ? 'Sign In' : 'Registration'}</FormTitle>
          <Form className={isLogin ? 'signin' : ''} onSubmit={handleSubmit}>
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
            <FormButton>{isRegistration ? 'Sign up' : 'Sign in'}</FormButton>
          </Form>
        </FormWrapper>
        <FormSwitch>
          <FormLink
            exact
            to={isLogin ? '/register' : '/signin'}
            onClick={() => setIsRegistration(!isRegistration)}
          >
            {isRegistration ? 'Sign in' : 'Registration'}
          </FormLink>
        </FormSwitch>
      </FormContainer>
    </>
  );
};

export default RegisterForm;

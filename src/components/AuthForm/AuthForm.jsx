import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useFormik } from 'formik';
import useValidationSchema from './ValidationSchema';
import * as authOperations from 'redux/auth/authOperations';
import iconUser from 'images/AuthImages/icon-user-mob.svg';
import iconMail from 'images/AuthImages/icon-mail-mob.svg';
import iconLock from 'images/AuthImages/icon-lock-mob.svg';
import iconUserTab from 'images/AuthImages/icon-user-tab.svg';
import iconMailTab from 'images/AuthImages/icon-mail-tab.svg';
import iconLockTab from 'images/AuthImages/icon-lock-tab.svg';
import iconError from 'images/AuthImages/error.svg';
import iconUserTabE from 'images/AuthImages/icon-user-tab-e.svg';
import iconMailTabE from 'images/AuthImages/icon-mail-tab-e.svg';
import iconLockTabE from 'images/AuthImages/icon-lock-tab-e.svg';
import iconUserTabG from 'images/AuthImages/icon-user-tab-g.svg';
import iconMailTabG from 'images/AuthImages/icon-mail-tab-g.svg';
import iconLockTabG from 'images/AuthImages/icon-lock-tab-g.svg';
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
  Error,
  Correct,
} from 'components/AuthForm/AuthForm.styled';

const RegisterForm = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/signin';
  const validationSchema = useValidationSchema();

  const dispatch = useDispatch();
  const [nameError, setNameError] = useState(false);
  const [nameCorrect, setNameCorrect] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const initialValues = { name: '', email: '', password: '' };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        if (isLogin) {
          await dispatch(authOperations.signIn(values));
          // Notify.success('You have successfully signed in', {
          //   fontSize: '16px',
          //   width: '350px',
          //   padding: '10px',
          // });
        } else {
          const result = await dispatch(authOperations.signUp(values));
          if (result.type === 'auth/signup/rejected') {
            return;
          }
          Notify.success('Your registration is successful', {
            fontSize: '16px',
            width: '350px',
            padding: '10px',
          });
          await dispatch(authOperations.signIn(values));
          formik.resetForm();
        }
      } catch (error) {
        console.error(error);
        Notify.error('Something went wrong.', {
          fontSize: '16px',
          width: '350px',
          padding: '10px',
        });
      }
    },
  });

  const handleInputChange = e => {
    formik.handleChange(e);
    const { name, value } = e.target;
    const regex = {
      name: /^[a-zA-Z\s-]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/,
    };
    const errors = {
      name: value.length === 0 || value.length < 3,
      email: value.length === 0 || !regex.email.test(value),
      password: value.length === 0 || !regex.password.test(value),
    };
    const correct = {
      name: !errors.name,
      email: !errors.email,
      password: !errors.password,
    };
    switch (name) {
      case 'name':
        setNameError(errors.name);
        setNameCorrect(correct.name);
        break;
      case 'email':
        setEmailError(errors.email);
        setEmailCorrect(correct.email);
        break;
      case 'password':
        setPasswordError(errors.password);
        setPasswordCorrect(correct.password);
        break;
      default:
        break;
    }
  };
  return (
    <FormContainer>
      <FormWrapper>
        <FormTitle>{isLogin ? 'Sign In' : 'Registration'}</FormTitle>
        <Form
          className={isLogin ? 'signin' : ''}
          onSubmit={formik.handleSubmit}
        >
          {!isLogin && (
            <InputWrap
              iconUrl={iconUser}
              iconTabUrl={iconUserTab}
              iconTabUrlE={iconUserTabE}
              iconTabUrlG={iconUserTabG}
              iconError={iconError}
              {...formik.getFieldProps('name')}
              error={Boolean(formik.touched.name && formik.errors.name)}
              correct={Boolean(formik.touched.name && !formik.errors.name)}
            >
              <FormInput
                placeholder="Name"
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                type="text"
                name="name"
                autoComplete="name"
                error={nameError}
                correct={nameCorrect}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <Error>{formik.errors.name}</Error>
              )}
              {nameCorrect && <Correct></Correct>}
            </InputWrap>
          )}
          <InputWrap
            iconUrl={iconMail}
            iconTabUrl={iconMailTab}
            iconTabUrlE={iconMailTabE}
            iconTabUrlG={iconMailTabG}
            iconError={iconError}
            {...formik.getFieldProps('email')}
            error={Boolean(formik.touched.email && formik.errors.email)}
            correct={Boolean(formik.touched.email && !formik.errors.email)}
          >
            <FormInput
              placeholder="Email"
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              type="email"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              error={emailError}
              correct={emailCorrect}
            />
            {formik.touched.email && formik.errors.email && (
              <Error>{formik.errors.email}</Error>
            )}
            {emailCorrect && <Correct></Correct>}
          </InputWrap>
          <InputWrap
            iconUrl={iconLock}
            iconTabUrl={iconLockTab}
            iconTabUrlE={iconLockTabE}
            iconTabUrlG={iconLockTabG}
            iconError={iconError}
            {...formik.getFieldProps('password')}
            error={Boolean(formik.touched.password && formik.errors.password)}
            correct={Boolean(
              formik.touched.password && !formik.errors.password
            )}
          >
            <FormInput
              placeholder="Password"
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              type="password"
              name="password"
              autoComplete="current-password"
              value={formik.values.password}
              error={passwordError}
              correct={passwordCorrect}
            />
            {formik.touched.password && formik.errors.password && (
              <Error>{formik.errors.password}</Error>
            )}
            {passwordCorrect && <Correct>Password is secure</Correct>}
            {passwordError && <Error></Error>}
          </InputWrap>
          <FormButton type="submit">
            {isLogin ? 'Sign in' : 'Sign up'}
          </FormButton>
        </Form>
      </FormWrapper>
      <FormSwitch>
        <FormLink exact to={isLogin ? '/register' : '/signin'}>
          {isLogin ? 'Registration' : 'Sign in'}
        </FormLink>
      </FormSwitch>
    </FormContainer>
  );
};
export default RegisterForm;

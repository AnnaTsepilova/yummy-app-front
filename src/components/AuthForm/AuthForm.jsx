import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as authOperations from 'redux/auth/authOperations';
import iconUser from 'images/AuthImages/icon-user-mob.svg';
import iconMail from 'images/AuthImages/icon-mail-mob.svg';
import iconLock from 'images/AuthImages/icon-lock-mob.svg';
import iconUserTab from 'images/AuthImages/icon-user-tab.svg';
import iconMailTab from 'images/AuthImages/icon-mail-tab.svg';
import iconLockTab from 'images/AuthImages/icon-lock-tab.svg';
import iconUserTabEr from 'images/AuthImages/error.svg';
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
  const dispatch = useDispatch();
  const [nameError, setNameError] = useState(false);
  const [nameCorrect, setNameCorrect] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const nameValidation = !isLogin
    ? Yup.string().nullable().required('Name is required')
    : Yup.string().test(
        'len',
        'Name must be at least 3 characters long',
        value => !value || value.length >= 3
      );
  const registrationSchema = Yup.object({
    name: nameValidation,
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(5, 'Password must be at least 5 characters')
      .required('Enter a valid Password'),
  });
  const initialValues = { name: '', email: '', password: '' };
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: values => {
      if (isLogin) {
        dispatch(authOperations.signIn(values));
      } else {
        dispatch(authOperations.signUp(values)).then(result => {
          if (result.type === 'auth/signup/rejected') {
            return;
          }
          Notify.success('Your registration is successful', {
            fontSize: '16px',
            width: '350px',
            padding: '10px',
          });
          dispatch(authOperations.signIn(values));
          formik.resetForm();
        });
      }
    },
  });
  useEffect(() => {
    setIsFormValid(formik.isValid);
  }, [formik.isValid]);

  const handleNameChange = e => {
    formik.handleChange(e);
    const value = e.target.value.trim();
    if (value.length === 0) {
      setNameError(true);
      setNameCorrect(false);
    } else if (value.length < 3) {
      setNameError(true);
      setNameCorrect(false);
    } else {
      setNameError(false);
      setNameCorrect(true);
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
              iconError={iconUserTabEr}
              {...formik.getFieldProps('name')}
              error={Boolean(formik.touched.name && formik.errors.name)}
            >
              <FormInput
                placeholder="Name"
                onChange={handleNameChange}
                onBlur={formik.handleBlur}
                type="text"
                name="name"
                autoComplete="name"
                value={formik.values.name}
              />
            </InputWrap>
          )}
          <InputWrap
            iconUrl={iconMail}
            iconTabUrl={iconMailTab}
            iconError={iconUserTabEr}
            {...formik.getFieldProps('email')}
            error={Boolean(formik.touched.email && formik.errors.email)}
          >
            <FormInput
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              name="email"
              autoComplete="email"
              value={formik.values.email}
            />
          </InputWrap>
          <InputWrap
            iconUrl={iconLock}
            iconTabUrl={iconLockTab}
            iconError={iconUserTabEr}
            {...formik.getFieldProps('password')}
            error={Boolean(formik.touched.password && formik.errors.password)}
          >
            <FormInput
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              name="password"
              autoComplete="current-password"
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <Error>{formik.errors.password}</Error>
            )}
            {nameCorrect && <Correct>Password is correct</Correct>}
            {nameError && (
              <Error>Password must be at least 5 characters long</Error>
            )}
          </InputWrap>
          <FormButton disabled={!isFormValid}>
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

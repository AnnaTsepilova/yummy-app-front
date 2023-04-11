import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useFormik } from 'formik';
import useValidationSchema from './ValidationSchema';
import * as authOperations from 'redux/auth/authOperations';
import checkPasswordStrength from './StrengthSchema';
import * as img from 'images/AuthImages';
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
  Warning,
} from 'components/AuthForm/AuthForm.styled';

const AuthForm = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/signin';
  const validationSchema = useValidationSchema();

  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      const { passwordStrength, ...data } = values;
      try {
        if (isLogin) {
          await dispatch(authOperations.signIn(data));
        } else {
          const result = await dispatch(authOperations.signUp(data));
          if (result.type === 'auth/signup/rejected') {
            return;
          }
          Notify.success('Your registration is successful', {
            fontSize: '16px',
            width: '350px',
            padding: '10px',
          });
          await dispatch(authOperations.signIn(data));
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
    validate: values => {
      let errors = {};
      return errors;
    },
  });

  const handleNameChange = e => {
    formik.handleChange(e);
    formik.setFieldTouched('name', true);
  };

  const handleEmailChange = e => {
    formik.handleChange(e);
    formik.setFieldTouched('email', true);
  };

  const handleInputChange = e => {
    formik.handleChange(e);
    const strength = checkPasswordStrength(formik.values.password);
    formik.setFieldValue('passwordStrength', strength);
  };

  const passwordStrength = formik.values.passwordStrength;
  const showError = formik.touched.password && formik.errors.password;
  const showWarning = passwordStrength === 'weak' && !showError;
  const showCorrect =
    !showError && !showWarning && formik.values.passwordStrength;

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
              iconUrl={img.iconUser}
              iconTabUrl={img.iconUserTab}
              iconTabUrlE={img.iconUserTabE}
              iconTabUrlG={img.iconUserTabG}
              iconError={img.iconError}
              iconCorrect={img.iconCorrect}
              {...formik.getFieldProps('name')}
              error={Boolean(formik.touched.name && formik.errors.name)}
              correct={Boolean(formik.touched.name && !formik.errors.name)}
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
              {formik.touched.name && formik.errors.name && (
                <Error>{formik.errors.name}</Error>
              )}
            </InputWrap>
          )}
          <InputWrap
            iconUrl={img.iconMail}
            iconTabUrl={img.iconMailTab}
            iconTabUrlE={img.iconMailTabE}
            iconTabUrlG={img.iconMailTabG}
            iconError={img.iconError}
            iconCorrect={img.iconCorrect}
            {...formik.getFieldProps('email')}
            error={Boolean(formik.touched.email && formik.errors.email)}
            correct={Boolean(formik.touched.email && !formik.errors.email)}
          >
            <FormInput
              placeholder="Email"
              onChange={handleEmailChange}
              onBlur={formik.handleBlur}
              type="email"
              name="email"
              autoComplete="email"
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <Error>{formik.errors.email}</Error>
            )}
          </InputWrap>
          <InputWrap
            iconUrl={img.iconLock}
            iconTabUrl={img.iconLockTab}
            iconTabUrlE={img.iconLockTabE}
            iconTabUrlG={img.iconLockTabG}
            iconError={img.iconError}
            iconWarning={img.iconWarning}
            iconCorrect={img.iconCorrect}
            error={showError}
            warning={showWarning}
            correct={showCorrect}
          >
            <FormInput
              placeholder="Password"
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              type="password"
              name="password"
              autoComplete="current-password"
              value={formik.values.password}
            />
            {showError && <Error>{formik.errors.password}</Error>}
            {showWarning && !showCorrect && (
              <Warning>Your password is little secure</Warning>
            )}
            {showCorrect && <Correct>Password is secure</Correct>}
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
export default AuthForm;

import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

const useValidationSchema = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/signin';

  const validationSchema = Yup.object().shape({
    name: !isLogin
      ? Yup.string()
          .required(' ')
          .min(3, 'Name must be at least 3 characters long')
          .matches(
            /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
            'Name can only contain letters, spaces, and dashes'
          )
      : Yup.string(),
    email: Yup.string()
      .email('Invalid email address')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address')
      .required(' '),
    password: !isLogin
      ? Yup.string()
          .min(5, 'Password must be at least 5 characters long')
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
          )
          .required('Enter a valid Password')
      : Yup.string()
          .min(5, 'Password must be at least 5 characters long')
          .required('Enter a valid Password'),
  });

  return validationSchema;
};

export default useValidationSchema;

import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .matches(
      /^[a-zA-Z\s-]+$/,
      'Name can only contain letters, spaces, and dashes'
    )
    .required(' '),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters long')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Enter a valid Password'),
});

export default validationSchema;

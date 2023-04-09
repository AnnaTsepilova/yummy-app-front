import axios from 'axios';
import Notiflix from 'notiflix';
import {
  FormWrapper,
  Form,
  Input,
  Button,
  InputWrap,
  Error,
} from './subscribeForm.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SubscribeForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required(' '),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        await axios.post('https://y-3wt8.onrender.com/api/subscribe/', {
          email: values.email,
        });
        Notiflix.Notify.success('Great! You signed up!');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          Notiflix.Notify.info('A user with this email is already signed');
        } else {
          Notiflix.Notify.failure('There was an error, try again later');
        }
      }
    },
  });

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="email"></label>
        <InputWrap
          iconUrl={img.iconMail}
          iconTabUrl={img.iconMailTab}
          iconTabUrlE={img.iconMailTabE}
          iconTabUrlG={img.iconMailTabG}
          iconError={img.iconError}
          iconCorrect={img.iconCorrect}
          error={Boolean(formik.touched.email && formik.errors.email)}
          correct={Boolean(formik.touched.email && !formik.errors.email)}
          {...formik.getFieldProps('email')}
        >
          <Input
            placeholder="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          {formik.touched.email && formik.errors.email && (
            <Error>{formik.errors.email}</Error>
          )}
        </InputWrap>

        <Button type="submit" disabled={!formik.isValid}>
          Subscribe
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default SubscribeForm;

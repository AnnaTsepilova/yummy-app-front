import styled from 'styled-components';
import { Form } from 'formik';

export const WrapperPage = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FollowUs = styled.div``;

export const StyledForm = styled(Form)`
  margin-bottom: 72px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const WrapperSubmitButton = styled.div`
  width: 343px;
  /* display: flex; */
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-left: 0px;
    width: 704px;
  }
`;

export const WrapperPopularRecipe = styled.div``;

import { useFormik } from 'formik';
import { object, mixed } from 'yup';
import {
  StyledForm,
  AvatarLabel,
  AvatarWrapper,
  ProfileIcon,
  FileInput,
  NameLabel,
  NameInput,
  SubmitBtn,
  NameEditIcon,
  SmallUserIcon,
  PasswordInputIcon,
  PlusFileIcon,
} from './UserProfileForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
} from 'redux/auth/authSelectors';
import { updateUserById, upLoadAvatar } from 'redux/auth/authOperations';

const UserProfileForm = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userAvatar = useSelector(selectUserAvatar);
  const dispatch = useDispatch();

  const onSubmitFnc = ({ password, userName, image }) => {
    console.log(userEmail);
    const user = {
      email: userEmail,
      password,
      name: userName,
    };

    if (!password) {
      const formData = new FormData();
      formData.append('image', image);

      dispatch(upLoadAvatar(formData));

      return;
    }

    dispatch(updateUserById(user));
  };

  const formik = useFormik({
    initialValues: {
      userName,
      password: '',
      image: '',
    },
    onSubmit: onSubmitFnc,
    validationSchema: object({
      image: mixed(),
    }),
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <AvatarLabel htmlFor="image">
        <AvatarWrapper avatar={userAvatar}>
          {userAvatar ? '' : <ProfileIcon />}
        </AvatarWrapper>
        <PlusFileIcon />
        <FileInput
          id="image"
          name="image"
          type="file"
          onChange={event => {
            console.log(event.currentTarget.files[0]);
            formik.setFieldValue('image', event.target.files[0]);
          }}
        />
      </AvatarLabel>
      <NameLabel htmlFor="userName">
        <SmallUserIcon />
        <NameEditIcon />
        <NameInput
          id="userName"
          name="userName"
          type="text"
          placeholder="name"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
      </NameLabel>
      <NameLabel htmlFor="password">
        <PasswordInputIcon />
        <NameInput
          id="password"
          name="password"
          type="password"
          placeholder="password"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </NameLabel>

      <SubmitBtn type="submit">Save changes </SubmitBtn>
    </StyledForm>
  );
};

export default UserProfileForm;

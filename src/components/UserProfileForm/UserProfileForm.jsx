import { useFormik } from 'formik';
// import { object, mixed, require } from 'yup';
import * as Yup from 'yup';
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
  PasswordLabel,
} from './UserProfileForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
} from 'redux/auth/authSelectors';
import { updateUserById, upLoadAvatar } from 'redux/auth/authOperations';
import UserAvatarThumb from './UserAvatarThumb/UserAvatarThumb';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const UserProfileForm = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userAvatar = useSelector(selectUserAvatar);
  const dispatch = useDispatch();

  const onSubmitFnc = ({ password, name, image }) => {
    const user = {
      email: userEmail,
      password,
      name,
    };

    if (image && name && name !== userName) {
      if (!password) {
        Notify.warning('Please enter a password and try again');
        return;
      }
      const formData = new FormData();
      formData.append('image', image);

      dispatch(upLoadAvatar(formData));
      dispatch(updateUserById(user));

      formik.resetForm({ values: { image, password: '' } });

      return;
    }

    if (image && image.name !== userAvatar) {
      const formData = new FormData();
      formData.append('image', image);

      dispatch(upLoadAvatar(formData));

      formik.resetForm({ values: { image, password: '' } });

      return;
    }

    if (name !== userName) {
      if (!password) {
        Notify.warning('Please enter a password and try again');
        return;
      }
      dispatch(updateUserById(user));

      formik.resetForm({ values: { name, password: '' } });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: userName,
      password: '',
      image: '',
    },
    onSubmit: onSubmitFnc,
    validationSchema: Yup.object({
      image: Yup.mixed(),
      password: Yup.string(),
    }),
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <AvatarLabel htmlFor="image">
        {formik.values.image ? (
          <UserAvatarThumb file={formik.values.image} />
        ) : (
          <AvatarWrapper avatar={userAvatar}>
            {userAvatar ? '' : <ProfileIcon />}
          </AvatarWrapper>
        )}
        <PlusFileIcon />
        <FileInput
          id="image"
          name="image"
          type="file"
          onChange={event => {
            formik.setFieldValue('image', event.target.files[0]);
          }}
        />
      </AvatarLabel>
      <NameLabel htmlFor="name">
        <SmallUserIcon />
        <NameEditIcon />
        <NameInput
          id="name"
          name="name"
          type="text"
          placeholder="name"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </NameLabel>
      <PasswordLabel htmlFor="password" need={userName !== formik.values.name}>
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
      </PasswordLabel>

      <SubmitBtn type="submit">Save changes </SubmitBtn>
    </StyledForm>
  );
};

export default UserProfileForm;

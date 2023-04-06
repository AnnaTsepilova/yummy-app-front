import { useFormik } from 'formik';
import {
  StyledForm,
  Avatar,
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

const UserProfileForm = () => {
  const formik = useFormik({
    initialValues: {
      file: '',
      userName: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <AvatarLabel htmlFor="file">
        <AvatarWrapper>
          {<Avatar src="#" alt="#" /> && <ProfileIcon />}
        </AvatarWrapper>
        <PlusFileIcon />
        <FileInput
          id="file"
          name="file"
          type="file"
          onChange={formik.handleChange}
          value={formik.values.file}
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
          value={formik.values.email}
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
          value={formik.values.email}
        />
      </NameLabel>

      <SubmitBtn type="submit">Save changes </SubmitBtn>
    </StyledForm>
  );
};

export default UserProfileForm;

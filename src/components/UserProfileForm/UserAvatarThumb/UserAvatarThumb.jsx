import { useState } from 'react';
import { ThumWrp, ThumImg } from './UserAvatarThumb.styled';

const UserAvatarThumb = ({ file }) => {
  const [thumb, setThumb] = useState();
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setThumb(reader.result);
    };
  }
  return (
    <ThumWrp>
      <ThumImg src={thumb} alt="#" />
    </ThumWrp>
  );
};

export default UserAvatarThumb;

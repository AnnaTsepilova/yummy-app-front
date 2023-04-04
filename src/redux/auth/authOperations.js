import { register, login, logout } from './authSlice';
import { selectToken } from './authSelectors';
import axios from 'axios';

export const loadUser = () => async (dispatch, getState) => {
  const token = selectToken(getState());

  if (!token) {
    return;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(`http://localhost:5000/api/auth/${token}`, config);

    dispatch(authSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(logout());
};

export { register, login, logoutUser };

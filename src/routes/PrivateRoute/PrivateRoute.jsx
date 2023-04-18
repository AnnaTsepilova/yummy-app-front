import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';
//import Loader from 'components/Loader/Loader';

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const fetchCurrentUser = () => {
    const currentUser = dispatch(getCurrentUser());
    console.log('PrivateRoute', currentUser);
  };

  return !token ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken, selectUser } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';

const PrivateRoute = () => {
  const currentUser = useSelector(selectUser);
  const token = useSelector(selectToken);
  console.log('PrivateRoute', currentUser);
  console.log('PrivateRoute', token);

  // return !token ? <Navigate to="/" /> : !currentUser ? <Loader /> : <Outlet />;
  return !token ? <Navigate to="/" /> : !currentUser ? <Loader /> : <Outlet />;
};

export default PrivateRoute;

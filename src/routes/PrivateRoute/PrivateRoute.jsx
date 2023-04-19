import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken, selectUser } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';

const PrivateRoute = () => {
  const currentUser = useSelector(selectUser);
  const token = useSelector(selectToken);

  return !token ? <Navigate to="/" /> : !currentUser ? <Loader /> : <Outlet />;
};

export default PrivateRoute;

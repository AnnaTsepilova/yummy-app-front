import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

const PrivateRoute = () => {
  const token = useSelector(selectToken);

  return !token ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;

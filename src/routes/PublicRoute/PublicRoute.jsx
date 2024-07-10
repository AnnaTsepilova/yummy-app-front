import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken, selectUser } from 'redux/auth/authSelectors';

const PublicRoute = () => {
  const currentUser = useSelector(selectUser);
  const token = useSelector(selectToken);

  return token && currentUser ? <Navigate to="/main" /> : <Outlet />;
};

export default PublicRoute;

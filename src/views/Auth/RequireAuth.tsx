import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { getFromLocal } from '../../utils';

const RequireAuth = () => {
  const authUser = getFromLocal('user');
  const location = useLocation();

  return authUser ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};

export default RequireAuth;

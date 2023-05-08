import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getFromLocal } from "../../utils/storageInstance";

const RequireAuth = () => {
  let authUser = getFromLocal("user");
  const location = useLocation();

  return authUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

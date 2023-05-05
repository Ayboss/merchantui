import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getFromSession } from "../../utils/storageInstance";

const RequireAuth = () => {
  let token = getFromSession("token");
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

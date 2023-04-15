import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Login from "../views/Auth/Login";
import Signup from "../views/Auth/Signup";
import GetStarted from "../views/Dashboard/GetStarted";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="getstarted" element={<GetStarted />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="getstarted" element={<GetStarted />} />
    </Routes>
  );
};

export const DashboardRoutes = () => {
  return (
    <Routes>
      {/* <Route path="getstarted" element={<GetStarted />} /> */}
    </Routes>
  );
};

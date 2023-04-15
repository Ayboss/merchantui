import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Login from "../views/Auth/Login";
import Signup from "../views/Auth/Signup";
import GetStarted from "../views/Dashboard/GetStarted";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/business-activation" element={<GetStarted />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

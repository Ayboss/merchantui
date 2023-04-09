import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Login from "../views/Auth/Login";
import Signup from "../views/Auth/Signup";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

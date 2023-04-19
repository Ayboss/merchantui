import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Login from "../views/Auth/Login";
import Signup from "../views/Auth/Signup";
import GetStarted from "../views/Dashboard/GetStarted";
import RegisteredBusinessFlow from "../views/Dashboard/RegisteredBusinessFlow";
import BusinessInformation from "../views/Dashboard/RegisteredBusinessFlow/Flows/BusinessInformation";
import AccountInformation from "../views/Dashboard/RegisteredBusinessFlow/Flows/AccountInformation";
import Bvn from "../views/Dashboard/RegisteredBusinessFlow/Flows/Bvn";
import Others from "../views/Dashboard/RegisteredBusinessFlow/Flows/Others";
import RegistrationDocuments from "../views/Dashboard/RegisteredBusinessFlow/Flows/RegistrationDocuments";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<GetStarted />} />
        <Route path="/business-activation" element={<GetStarted />} />
        <Route path="/registered-business" element={<RegisteredBusinessFlow />}>
          <Route
            path="business-information"
            element={<BusinessInformation />}
          />
          <Route path="account-information" element={<AccountInformation />} />
          <Route
            path="registration-documents"
            element={<RegistrationDocuments />}
          />
          <Route path="bvn-primary-officer" element={<Bvn />} />
          <Route path="others" element={<Others />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

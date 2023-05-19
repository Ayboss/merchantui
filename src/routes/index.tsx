import { Routes, Route, Navigate } from 'react-router-dom';

<<<<<<< HEAD
import Dashboard from '../views/Dashboard';
import Login from '../views/Auth/Login';
import Signup from '../views/Auth/Signup';
import GetStarted from '../views/Dashboard/Onboarding/GetStarted';
import RegisteredBusinessFlow from '../views/Dashboard/Onboarding/RegisteredBusinessFlow';
import BusinessInformation from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/BusinessInformation';
import AccountInformation from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/AccountInformation';
import Bvn from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/Bvn';
import Others from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/Others';
import BusinessDocuments from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/BusinessDocuments';
import RequireAuth from '../views/Auth/RequireAuth';
import ForgetPassword from '../views/Auth/ForgetPassword';
import ResetPassword from '../views/Auth/ResetPassword';
=======
import Dashboard from "../views/Dashboard";
import Login from "../views/Auth/Login";
import Signup from "../views/Auth/Signup";
import GetStarted from "../views/Dashboard/GetStarted";
import RegisteredBusinessFlow from "../views/Dashboard/RegisteredBusinessFlow";
import BusinessInformation from "../views/Dashboard/RegisteredBusinessFlow/Flows/BusinessInformation";
import AccountInformation from "../views/Dashboard/RegisteredBusinessFlow/Flows/AccountInformation";
import Bvn from "../views/Dashboard/RegisteredBusinessFlow/Flows/Bvn";
import Others from "../views/Dashboard/RegisteredBusinessFlow/Flows/Others";
import BusinessDocuments from "../views/Dashboard/RegisteredBusinessFlow/Flows/BusinessDocuments";
import RequireAuth from "../views/Auth/RequireAuth";
import ForgetPassword from "../views/Auth/ForgetPassword";
>>>>>>> 11a1553 (forget password updates with new branch initialization)

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<GetStarted />} />
          <Route path='/business-activation' element={<GetStarted />} />
          <Route
            path='/registered-business'
            element={<RegisteredBusinessFlow />}
          >
            <Route
              path='business-information'
              element={<BusinessInformation />}
            />
            <Route
              path='account-information'
              element={<AccountInformation />}
            />
            <Route
              path='registration-documents'
              element={<BusinessDocuments />}
            />
            <Route path='bvn-primary-officer' element={<Bvn />} />
            <Route path='others' element={<Others />} />
          </Route>
          <Route path='/transactions' element={<></>} />
        </Route>
        <Route path="/transactions" element={<></>} />
      </Route>
<<<<<<< HEAD
      <Route path='login' element={<Login />} />
      <Route path='forget-password' element={<ForgetPassword />} />
      <Route path='reset-password' element={<ResetPassword />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
=======
      <Route path="login" element={<Login />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
>>>>>>> 11a1553 (forget password updates with new branch initialization)
    </Routes>
  );
};

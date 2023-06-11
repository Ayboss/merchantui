import React, { PropsWithChildren, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import GetStarted from '../views/Dashboard/Onboarding/GetStarted';
import { RegisteredBusinessFlow } from '../views/Dashboard/Onboarding/RegisteredBusinessFlow';
import BusinessInformation from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/BusinessInformation';
import AccountInformation from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/AccountInformation';
import BusinessDocuments from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/BusinessDocuments';
import Bvn from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/Bvn';
import Others from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/Others';
import Transactions from '../views/Dashboard/Transactions/index';
import Settings from '../views/Dashboard/Settings/index';
import { ForgetPassword, Login, ResetPassword, Signup } from '../views/Auth';
import { Payouts } from '../views/Dashboard/Payouts';
import { PayoutHistory } from '../views/Dashboard/Payouts/History';
import { PRIVATE_PATHS, REGULAR_PATHS } from './paths';

export const AppRouter = () => {
  const {
    ACCOUNT_INFORMATION,
    BVN_PRIMARY_OFFICER,
    OTHERS,
    REGISTERED_BUSINESS,
    REGISTERED_DOCUMENTS,
    SETTINGS,
    TRANSACTIONS,
    BUSINESS_ACTIVATION,
    BUSINESS_INFORMATION,
    HOME,
    PAYOUTS,
    PAYOUT__HISTORY,
    PAYOUT_OPTIONS
  } = PRIVATE_PATHS;

  const { FORGOT_PASSWORD, LOGIN, RESET_PASSWORD, SIGN_UP } = REGULAR_PATHS;

  return (
    <Routes>
      <Route
        path={HOME}
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<GetStarted />} />
        <Route path={BUSINESS_ACTIVATION} element={<GetStarted />} />
        <Route path={REGISTERED_BUSINESS} element={<RegisteredBusinessFlow />}>
          <Route path={BUSINESS_INFORMATION} element={<BusinessInformation />} />
          <Route path={ACCOUNT_INFORMATION} element={<AccountInformation />} />
          <Route path={REGISTERED_DOCUMENTS} element={<BusinessDocuments />} />
          <Route path={BVN_PRIMARY_OFFICER} element={<Bvn />} />
          <Route path={OTHERS} element={<Others />} />
        </Route>
        <Route path={TRANSACTIONS} element={<Transactions />} />
        <Route path={SETTINGS} element={<Settings />} />
        <Route path={PAYOUTS} element={<Payouts />}>
          <Route path={PAYOUT__HISTORY} element={<PayoutHistory />} />
          <Route path={PAYOUT_OPTIONS} element={<PayoutHistory />} />
        </Route>
      </Route>
      <Route path={LOGIN} element={<Login />} />
      <Route path={FORGOT_PASSWORD} element={<ForgetPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={SIGN_UP} element={<Signup />} />
      <Route path='*' element={<Navigate to={LOGIN} replace />} />
    </Routes>
  );
};

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccessToken = () => {
      const accessToken = localStorage.getItem('key');

      if (!accessToken) {
        navigate(REGULAR_PATHS.LOGIN);
      }
    };

    checkAccessToken();
  }, [navigate]);

  return <>{children}</>;
};

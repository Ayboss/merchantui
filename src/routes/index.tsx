import React, { PropsWithChildren, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
// import GetStarted from '../views/Dashboard/Onboarding/GetStarted';
import { RegisteredBusinessFlow } from '../views/Dashboard/Onboarding/RegisteredBusinessFlow';
import BusinessInformation from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/BusinessInformation';
import AccountInformation from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/AccountInformation';
import BusinessDocuments from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/BusinessDocuments';
import Bvn from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/Bvn';
import Others from '../views/Dashboard/Onboarding/RegisteredBusinessFlow/Flows/Others';
import Transactions from '../views/Dashboard/Transactions/index';
import Settings from '../views/Dashboard/Settings/index';
import { ForgetPassword, Login, ResetPassword, Signup } from '../views/Auth';
import Overview from '../views/Dashboard/Overview';
import { Payouts } from '../views/Dashboard/Payouts';
import { PayoutHistory } from '../views/Dashboard/Payouts/History';
import { PayoutOptions } from '../views/Dashboard/Payouts/Options';
import { useRedirect } from '../hooks';
import Settlements from '../views/Dashboard/Settlements';
import { KycVerification } from '../views/KYC';
import { ServiceStatus } from '../views/Dashboard/ServiceStatus';
import { WalletHistory } from '../views/Dashboard/WalletHistory';
import { PRIVATE_PATHS, REGULAR_PATHS } from './paths';

export const AppRouter = () => {
  const {
    ACCOUNT_INFORMATION,
    BVN_PRIMARY_OFFICER,
    OTHERS,
    OVERVIEW,
    REGISTERED_BUSINESS,
    REGISTERED_DOCUMENTS,
    SETTINGS,
    TRANSACTIONS,
    // BUSINESS_ACTIVATION,
    BUSINESS_INFORMATION,
    HOME,
    PAYOUTS,
    PAYOUT_HISTORY,
    PAYOUT_OPTIONS,
    SETTLEMENTS,
    KYC_VERIFICATION,
    SERVICE_STATUS,
    WALLET_HISTORY
  } = PRIVATE_PATHS;

  const { FORGOT_PASSWORD, LOGIN, RESET_PASSWORD, SIGN_UP } = REGULAR_PATHS;

  useRedirect();

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
        {/* <Route path={BUSINESS_ACTIVATION} element={<GetStarted />} /> */}
        <Route index element={<Overview />} />
        <Route path={OVERVIEW} element={<Overview />} />
        <Route path={REGISTERED_BUSINESS} element={<RegisteredBusinessFlow />}>
          <Route path={BUSINESS_INFORMATION} element={<BusinessInformation />} />
          <Route path={ACCOUNT_INFORMATION} element={<AccountInformation />} />
          <Route path={REGISTERED_DOCUMENTS} element={<BusinessDocuments />} />
          <Route path={BVN_PRIMARY_OFFICER} element={<Bvn />} />
          <Route path={OTHERS} element={<Others />} />
        </Route>
        <Route path={TRANSACTIONS} element={<Transactions />} />
        <Route path={SETTLEMENTS} element={<Settlements />} />
        <Route path={SETTINGS} element={<Settings />} />
        <Route path={PAYOUTS} element={<Payouts />}>
          <Route path={PAYOUT_OPTIONS} element={<PayoutOptions />} />
          <Route path={PAYOUT_HISTORY} element={<PayoutHistory />} />
        </Route>
        <Route path={KYC_VERIFICATION} element={<KycVerification />} />
        <Route path={SERVICE_STATUS} element={<ServiceStatus />} />
        <Route path={WALLET_HISTORY} element={<WalletHistory />} />
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

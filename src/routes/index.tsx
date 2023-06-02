import React from 'react';
import { RequireAuth } from 'react-auth-kit';
import { Routes, Route, Navigate } from 'react-router-dom';
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

export const AppRouter = () => {
  return (
    <Routes>
      {/* @ts-ignore - Missing properties for RequireAuth */}
      <Route element={<RequireAuth loginPath='/login'></RequireAuth>}></Route>
      <Route path='/' element={<Dashboard />}>
        <Route index element={<GetStarted />} />
        <Route path='/business-activation' element={<GetStarted />} />
        <Route path='/registered-business' element={<RegisteredBusinessFlow />}>
          <Route path='business-information' element={<BusinessInformation />} />
          <Route path='account-information' element={<AccountInformation />} />
          <Route path='registration-documents' element={<BusinessDocuments />} />
          <Route path='bvn-primary-officer' element={<Bvn />} />
          <Route path='others' element={<Others />} />
        </Route>
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/Settings' element={<Settings />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  );
};

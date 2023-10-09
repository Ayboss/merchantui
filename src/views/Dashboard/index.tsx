import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '../../layouts';
import { useProfileQuery } from '../../services/hooks/useGetProfileQuery';

const MerchantsDashboard = () => {
  useProfileQuery();

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default MerchantsDashboard;

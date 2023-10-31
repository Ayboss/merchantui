import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '../../layouts';
import { useProfileQuery } from '../../services/hooks/useGetProfileQuery';
import { usePopupContext } from '../../context/PopupContext';
import { PaymentPopup } from './Payouts/PaymentPopup';

const MerchantsDashboard = () => {
  useProfileQuery();
  const { setShowInitiatePopup, showInitiatePopup } = usePopupContext();

  return (
    <DashboardLayout>
      <Outlet />
      {showInitiatePopup && <PaymentPopup onClose={() => setShowInitiatePopup(false)} />}
    </DashboardLayout>
  );
};

export default MerchantsDashboard;

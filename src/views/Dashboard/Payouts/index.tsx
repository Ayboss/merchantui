import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DashboardContentHeader, Tabs } from '../../../components';
import { PRIVATE_PATHS } from '../../../routes/paths';
import { PayoutsContainer, PayoutsTopFlexWrapper } from './style';
import { PAYOUTS_TAB_ITEMS } from './constants';

export const Payouts: React.FC = () => {
  const { pathname } = useLocation();
  const { PAYOUTS, PAYOUT_OPTIONS } = PRIVATE_PATHS;

  const activeTab = useMemo(() => {
    return pathname === PAYOUTS ? PAYOUT_OPTIONS : pathname;
  }, [PAYOUTS, PAYOUT_OPTIONS, pathname]);

  return (
    <PayoutsContainer>
      <PayoutsTopFlexWrapper>
        <DashboardContentHeader title='Payouts' subtitle='View insights on Payout' />
      </PayoutsTopFlexWrapper>
      <Tabs current={activeTab} links={PAYOUTS_TAB_ITEMS} />
      <Outlet />
    </PayoutsContainer>
  );
};

import React from 'react';
import { useDashboardTopIntro } from '../../../hooks/useDashboardTopIntro';
import { PayoutsContainer } from './style';
import { PayoutHistory } from './History';

export const Payouts: React.FC = () => {
  const { TopIntro } = useDashboardTopIntro();

  return (
    <PayoutsContainer>
      <TopIntro />
      <PayoutHistory />
    </PayoutsContainer>
  );
};

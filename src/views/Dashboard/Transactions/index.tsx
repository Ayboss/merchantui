import React from 'react';
import { DashboardContentHeader } from '../../../components';
import {
  DashboardCardContainer,
  TransactionsContainer,
  TransactionsTopFlexWrapper
} from './styles';
import { MockTransactionCardDetails } from './mock';
import { TransactionCard } from './components';

const Transactions: React.FC = () => {
  return (
    <TransactionsContainer>
      <TransactionsTopFlexWrapper>
        <DashboardContentHeader title='Transactions' subtitle='All  This Week Transactions' />
      </TransactionsTopFlexWrapper>
      <DashboardCardContainer>
        {MockTransactionCardDetails.map((detail) => (
          <TransactionCard key={detail.text} {...detail} />
        ))}
      </DashboardCardContainer>
    </TransactionsContainer>
  );
};

export default Transactions;

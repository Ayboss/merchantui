import React from 'react';
import { CustomTable, DashboardContentHeader } from '../../../components';
import {
  DashboardCardContainer,
  TransactionsContainer,
  TransactionsTableTitleWithFilter,
  TransactionsTopFlexWrapper
} from './styles';
import { MockTransactionCardDetails, MockTransactionsData, MockTransactionsHeader } from './mock';
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
      <TransactionsTableTitleWithFilter>
        <h3 className='text-[#000000] text-[20px] font-semi-bold'>All Transactions</h3>
      </TransactionsTableTitleWithFilter>
      <CustomTable data={MockTransactionsData} headers={MockTransactionsHeader} />
    </TransactionsContainer>
  );
};

export default Transactions;

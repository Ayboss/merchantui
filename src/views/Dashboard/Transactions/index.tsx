import React from 'react';
import { CustomTable, DashboardContentHeader, LoaderControl, Paginator } from '../../../components';
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
      <LoaderControl
        loading={false}
        error={false}
        overlay={false}
        errorTitle='Something went wrong'
        errorSubTitle="Sorry, we couldn't load your transactions, try reloading"
        minHeight={'400px'}
        errorControlOnClick={() => {}}
      >
        <CustomTable data={MockTransactionsData} headers={MockTransactionsHeader} />
      </LoaderControl>
      <Paginator />
    </TransactionsContainer>
  );
};

export default Transactions;

import React, { useMemo, useState } from 'react';
import { CustomTable, DashboardContentHeader, LoaderControl, Paginator } from '../../../components';
import {
  TransactionItemType,
  TransactionsQueryParamsType,
  useGetTransactionsQuery
} from '../../../services/hooks';
import { formatDate, formatNumber } from '../../../utils';
import {
  DashboardCardContainer,
  TransactionsContainer,
  TransactionsTableTitleWithFilter,
  TransactionsTopFlexWrapper
} from './styles';
import { MockTransactionCardDetails } from './mock';
import { TransactionCard } from './components';
import { TransactionsHeader } from './constants';

const Transactions: React.FC = () => {
  const [query, setQuery] = useState<TransactionsQueryParamsType>({
    page: 0
  });
  const { data, isLoading, isError, refetch } = useGetTransactionsQuery({ ...query });

  const handlePageChange = (current: number) => {
    setQuery({ ...query, page: current - 1 });
  };

  const transformData = useMemo(() => {
    if (data?.data?.content) {
      const contents = data?.data?.content;

      return contents.map((item: TransactionItemType, id: number) => {
        return {
          ...item,
          index: id + 1,
          created: formatDate(item?.created),
          amount: formatNumber(item?.amount)
        };
      });
    } else {
      return [];
    }
  }, [data?.data?.content]);

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
        loading={isLoading}
        error={isError}
        overlay={isLoading}
        errorTitle='Something went wrong'
        errorSubTitle="Sorry, we couldn't load your transactions, try reloading"
        minHeight={'400px'}
        errorControlOnClick={() => refetch()}
      >
        <CustomTable data={transformData} headers={TransactionsHeader} />
      </LoaderControl>
      {!isError && (
        <Paginator
          total={data?.data?.totalElements || 1}
          pageSize={data?.data?.size || 1}
          onChange={handlePageChange}
        />
      )}
    </TransactionsContainer>
  );
};

export default Transactions;

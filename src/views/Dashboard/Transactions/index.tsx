import React, { useMemo, useState } from 'react';
import { CustomTable, DashboardContentHeader, LoaderControl, Paginator } from '../../../components';
import {
  TransactionItemType,
  TransactionsQueryParamsType,
  useGetTransactionsQuery,
  useTransactionsSummaryQuery
} from '../../../services/hooks';
import { formatDate, formatNumber } from '../../../utils';
import {
  DashboardCardContainer,
  TransactionsContainer,
  TransactionsTableTitleWithFilter,
  TransactionsTopFlexWrapper
} from './styles';
import { TransactionCard, TransactionCardPropsType, TransactionItem } from './components';
import { TransactionsHeader } from './constants';

const Transactions: React.FC = () => {
  const [openTransactionItemDetail, setShowTransactionItemDetail] = useState(false);
  const [currentDetails, setCurrentDetails] = useState<TransactionItemType | null>(null);

  const { data: summaryData } = useTransactionsSummaryQuery();

  const transactionSummaryData: TransactionCardPropsType[] = [
    {
      amount: `₦${formatNumber(summaryData?.data?.transactionValue ?? 0)}`,
      title: 'Transaction Value',
      text: 'All Transactions volume for a specific duration'
    },
    {
      amount: formatNumber(summaryData?.data?.transactionVolume ?? 0),
      title: 'Transaction Volume',
      text: 'All Transactions value for a specific duration'
    },
    {
      amount: formatNumber(summaryData?.data?.succesfulTransaction ?? 0),
      title: 'Successful Transaction',
      text: 'All payment that was successfully transacted'
    },
    {
      amount: formatNumber(summaryData?.data?.failedTransaction ?? 0),
      title: 'Failed Transaction',
      text: 'All payment that was unsuccessfully transacted'
    }
  ];

  const [query, setQuery] = useState<TransactionsQueryParamsType>({
    page: 0
  });
  const { data, isError, refetch, isFetching } = useGetTransactionsQuery({ ...query });

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
        {transactionSummaryData.map((detail) => (
          <TransactionCard key={detail.text} {...detail} />
        ))}
      </DashboardCardContainer>
      <TransactionsTableTitleWithFilter>
        <h3 className='text-[#000000] text-[20px] font-semi-bold'>All Transactions</h3>
      </TransactionsTableTitleWithFilter>
      <LoaderControl
        loading={isFetching}
        error={isError}
        overlay={isFetching}
        errorTitle='Something went wrong'
        errorSubTitle="Sorry, we couldn't load your transactions, try reloading"
        minHeight={'400px'}
        errorControlOnClick={() => refetch()}
      >
        <CustomTable
          onRowClick={(detail) => {
            // @ts-ignore incompatible amount and created type
            setCurrentDetails(detail);
            setShowTransactionItemDetail(true);
          }}
          data={transformData}
          headers={TransactionsHeader}
        />
      </LoaderControl>
      {!isError && (
        <Paginator
          total={data?.data?.totalElements || 1}
          pageSize={data?.data?.size || 1}
          onChange={handlePageChange}
        />
      )}
      {openTransactionItemDetail && (
        <TransactionItem {...currentDetails} onClose={() => setShowTransactionItemDetail(false)} />
      )}
    </TransactionsContainer>
  );
};

export default Transactions;

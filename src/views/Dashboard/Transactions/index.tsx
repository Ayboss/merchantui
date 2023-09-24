import React, { useMemo, useState } from 'react';
import {
  Card,
  CustomInput,
  CustomTable,
  EmptyContent,
  LoaderControl,
  Paginator
} from '../../../components';
import {
  TransactionItemType,
  TransactionsQueryParamsType,
  useGetTransactionsQuery,
  useTransactionsSummaryQuery
} from '../../../services/hooks';
import { formatDate, formatNumber, getFromLocal } from '../../../utils';
import { CardType } from '../../../components/Card/type';
import { WhiteBGContainer } from '../Overview/components/ListContainer';
import { UserDetails } from '../../../services/hooks/types';
import {
  DashboardCardContainer,
  TransactionsContainer,
  TransactionsTableTitleWithFilter,
  TransactionsTopFlexWrapper
} from './styles';
import { TransactionItem } from './components';
import { TransactionsHeader } from './constants';

const Transactions: React.FC = () => {
  const [openTransactionItemDetail, setShowTransactionItemDetail] = useState(false);
  const { firstName } = JSON.parse(getFromLocal('user') as string) as unknown as UserDetails;
  const [currentDetails, setCurrentDetails] = useState<TransactionItemType | null>(null);

  const { data: summaryData } = useTransactionsSummaryQuery();

  const transactionSummaryData: CardType[] = [
    {
      amount: summaryData?.data?.transactionVolume ?? 0,
      title: 'Total Transaction Volume'
    },
    {
      amount: `₦${formatNumber(summaryData?.data?.transactionValue ?? 0)}`,
      title: 'Total Transaction Value'
    },
    {
      amount: summaryData?.data?.successfulTransaction ?? 0,
      title: 'Completed Transactions'
    },
    {
      amount: summaryData?.data?.failedTransaction ?? 0,
      title: 'Failed Transactions'
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
          amount: `₦${formatNumber(item?.amount)}`
        };
      });
    } else {
      return [];
    }
  }, [data?.data?.content]);

  return (
    <TransactionsContainer>
      <TransactionsTopFlexWrapper>
        <p className='text-[#6F7482] font-medium text-base leading-6'>
          <span className='text-[#444] font-bold leading-6 text-base'>Hello {firstName} - </span>
          here’s what’s happening with your business today
        </p>
      </TransactionsTopFlexWrapper>
      <DashboardCardContainer>
        {transactionSummaryData.map((detail) => (
          <Card key={detail.title} {...detail} />
        ))}
      </DashboardCardContainer>
      <WhiteBGContainer className='mt-5'>
        <h3 className='text-[#444] text-[16px] font-semibold leading-6 px-5 mb-[18px]'>
          All Transactions
        </h3>
        <TransactionsTableTitleWithFilter className='px-5 mb-[18px] py-0'>
          <CustomInput
            className='rounded-[5px] w-full max-w-[500px]'
            placeholder='Search with Customer Name/Transaction ID'
            name='queryString'
            InputClassName='h-[30px]'
          />
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
            emptyLayout={
              <EmptyContent
                text='No recent transactions. Looks like you haven’t made any transaction, no worries! '
                onClick={() => refetch()}
                className='min-h-[400px]'
              />
            }
          />
        </LoaderControl>
        {!isError && (
          <Paginator
            total={data?.data?.totalElements || 1}
            pageSize={data?.data?.size || 1}
            onChange={handlePageChange}
          />
        )}
      </WhiteBGContainer>
      {openTransactionItemDetail && (
        <TransactionItem {...currentDetails} onClose={() => setShowTransactionItemDetail(false)} />
      )}
    </TransactionsContainer>
  );
};

export default Transactions;

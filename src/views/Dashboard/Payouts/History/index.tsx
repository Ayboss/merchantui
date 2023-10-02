import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import _ from 'lodash';
import { formatDate, formatNumber } from '../../../../utils';
import {
  CustomInput,
  CustomTable,
  EmptyContent,
  LoaderControl,
  Paginator
} from '../../../../components';
import {
  PayoutItemType,
  useGetPayoutsQuery,
  useMerchantStatsQuery
} from '../../../../services/hooks';
import { PRIVATE_PATHS } from '../../../../routes/paths';
import { TransactionsTableTitleWithFilter } from '../../Transactions/styles';
import { PayoutSummaryCard, PayoutSummaryCardPropsType } from './components';
import { ReactComponent as Icon } from './icons/balance.svg';
import { PAYOUT_HISTORY_HEADER } from './constants';
import { PayoutItem } from './components/PayoutItem';

export const PayoutHistory: React.FC = () => {
  const { data: statsData } = useMerchantStatsQuery();
  const payoutCardsData: Array<PayoutSummaryCardPropsType> = [
    {
      amount: `₦‎${formatNumber(statsData?.data?.walletsBalance ?? 0)}`,
      text: 'Balance',
      icon: <Icon />
    },
    {
      amount: `₦‎${formatNumber(statsData?.data?.pendingPayoutAmount ?? 0)}`,
      text: 'Pending Payout',
      icon: <Icon />
    },
    {
      amount: `${formatNumber(statsData?.data?.successfulPayout ?? 0, 0)}`,
      text: 'Successful',
      icon: <Icon />
    },
    {
      amount: `${formatNumber(statsData?.data?.failedPayout ?? 0, 0)}`,
      text: 'Failed',
      icon: <Icon />
    }
  ];

  const [query, setQuery] = useState({
    page: 1,
    reference: ''
  });
  const [currentDetails, setCurrentDetails] = useState<PayoutItemType | null>(null);
  const [showPayoutDetails, setShowPayoutDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isError, refetch, isFetching } = useGetPayoutsQuery({ ...query });
  const navigate = useNavigate();

  const handlePageChange = (current: number) => {
    setQuery({ ...query, page: current });
  };

  const transformData = useMemo(() => {
    if (data?.data?.content) {
      const contents = data?.data?.content;

      return contents.map((item: PayoutItemType, id: number) => {
        return {
          ...item,
          index: id + 1,
          created: formatDate(item?.created),
          transactionAmount: `₦${formatNumber(item?.transactionAmount)}`
        };
      });
    } else {
      return [];
    }
  }, [data?.data?.content]);

  const onSearchChange = useCallback((value: string) => {
    setQuery({
      ...query,
      reference: value
    });
  }, []);

  const onEnterKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      refetch();
    }
  };

  const onKeyDownCapture = (event: any) => {
    if (event.key === 'Backspace' && searchQuery.length < 1) {
      refetch();
    }
  };

  useEffect(() => {
    onSearchChange(searchQuery);
  }, [onSearchChange, refetch, searchQuery]);

  return (
    <div className='w-full mt-[33px]'>
      <div className='flex items-center mb-[40px] gap-[20px]'>
        {payoutCardsData.map((item) => (
          <PayoutSummaryCard {...item} key={item.text} />
        ))}
      </div>
      <div className='mt-[40px] mb-[15px] w-full flex justify-between'>
        <h3 className='text-[#444] text-[18px] font-semibold'>Recent Payout</h3>
      </div>
      <TransactionsTableTitleWithFilter className=' mb-[18px]'>
        <CustomInput
          className='rounded-[5px] w-full max-w-[500px]'
          placeholder='Search with reference, narration, account name or account number'
          name='queryString'
          InputClassName='h-[30px]'
          value={searchQuery}
          onKeyDown={onEnterKeyPress}
          onKeyDownCapture={onKeyDownCapture}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </TransactionsTableTitleWithFilter>
      <LoaderControl
        loading={isFetching}
        error={isError}
        overlay={isFetching}
        errorTitle='Something went wrong'
        errorSubTitle="Sorry, we couldn't load your payouts, try reloading"
        minHeight={'400px'}
        errorControlOnClick={() => refetch()}
      >
        <CustomTable
          onRowClick={(detail) => {
            // @ts-ignore incompatible amount and created type
            setCurrentDetails(detail);
            setShowPayoutDetails(true);
          }}
          data={transformData}
          headers={PAYOUT_HISTORY_HEADER}
          emptyLayout={
            <EmptyContent
              text='No recent payouts. Looks like you haven’t made any payout, no worries! '
              onClick={() => navigate(PRIVATE_PATHS.PAYOUT_OPTIONS)}
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
      {showPayoutDetails && (
        <PayoutItem {...currentDetails} onClose={() => setShowPayoutDetails(false)} />
      )}
    </div>
  );
};

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { formatDate, formatNumber } from '../../../../utils';
import {
  Card,
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
import { PAYOUT_HISTORY_HEADER } from './constants';
import { PayoutItem } from './components/PayoutItem';
import 'react-dropdown/style.css';
// eslint-disable-next-line import/order
import { CardType } from '../../../../components/Card/type';

export const PayoutHistory: React.FC = () => {
  const { data: statsData } = useMerchantStatsQuery();
  const payoutCardsData: Array<CardType> = [
    {
      amount: `₦‎${formatNumber(statsData?.data?.walletsBalance ?? 0)}`,
      title: 'Balance'
    },
    {
      amount: `₦‎${formatNumber(statsData?.data?.pendingPayoutAmount ?? 0)}`,
      title: 'Pending Payout'
    },
    {
      amount: `${formatNumber(statsData?.data?.successfulPayout ?? 0, 0)}`,
      title: 'Successful'
    },
    {
      amount: `${formatNumber(statsData?.data?.failedPayout ?? 0, 0)}`,
      title: 'Failed'
    }
  ];

  const [query, setQuery] = useState({
    page: 1,
    reference: '',
    status: ''
  });
  const [currentDetails, setCurrentDetails] = useState<PayoutItemType | null>(null);
  const [showPayoutDetails, setShowPayoutDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isError, refetch, isFetching } = useGetPayoutsQuery({ ...query });
  const navigate = useNavigate();

  const dropdownOption = [
    { value: '', label: 'ALL' },
    { value: 'SUCCESSFUL', label: 'COMPLETED' },
    { value: 'PROCESSING', label: 'PROCESSING' },
    { value: 'FAILED', label: 'FAILED' },
    { value: 'REFUND', label: 'REFUND' }
  ];

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

  useEffect(() => {
    refetch();
  }, [query.status, refetch]);

  return (
    <div className='w-full mt-[33px]'>
      <div className='flex items-center mb-[40px] gap-[20px]'>
        {payoutCardsData.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
      <div className='mt-[40px] mb-[15px] w-full flex justify-between'>
        <h3 className='text-[#444] text-[18px] font-semibold'>Recent Payout</h3>
      </div>
      <TransactionsTableTitleWithFilter className=' mb-[18px] gap-4 items-end '>
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
        <Dropdown
          options={dropdownOption}
          onChange={({ value }) => {
            setQuery({
              ...query,
              status: value
            });
          }}
          placeholder='Status'
          className=' rounded-[5px] w-[130px] border-solid border-[#E4E4E7] h-[30px] flex items-center cursor-pointer justify-between border-[1px]'
          placeholderClassName=' text-[#6F7482] font-medium text-[14px]'
          menuClassName=' border-solid border-[#E4E4E7] rounded-[5px] rounded-t-none '
          arrowClosed={<FontAwesomeIcon icon={faAngleDown} style={{ color: '#B8BCCA' }} />}
          arrowOpen={<FontAwesomeIcon icon={faAngleUp} style={{ color: '#B8BCCA' }} />}
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

import React, { useMemo, useState } from 'react';
import { formatDate, formatNumber } from '../../../../utils';
import { CustomTable, LoaderControl, Paginator, TableEmptyLayout } from '../../../../components';
import { PayoutItemType, useGetPayoutsQuery } from '../../../../services/hooks';
import { PayoutSummaryCard, PayoutSummaryCardPropsType } from './components';
import { ReactComponent as Icon } from './icons/balance.svg';
import { PAYOUT_HISTORY_HEADER } from './constants';
import { PayoutItem } from './components/PayoutItem';

export const PayoutHistory: React.FC = () => {
  const payoutCardsData: Array<PayoutSummaryCardPropsType> = [
    {
      amount: `₦${formatNumber(0)}`,
      text: 'Balance',
      icon: <Icon />
    },
    {
      amount: `₦${formatNumber(0)}`,
      text: 'Pending Payout',
      icon: <Icon />
    },
    {
      amount: `₦${formatNumber(0)}`,
      text: 'Successful',
      icon: <Icon />
    },
    {
      amount: `₦${formatNumber(0)}`,
      text: 'Failed',
      icon: <Icon />
    }
  ];

  const [query, setQuery] = useState({
    page: 0
  });
  const [currentDetails, setCurrentDetails] = useState<PayoutItemType | null>(null);
  const [showPayoutDetails, setShowPayoutDetails] = useState(false);
  const { data, isError, refetch, isFetching } = useGetPayoutsQuery();

  const handlePageChange = (current: number) => {
    setQuery({ ...query, page: current - 1 });
  };

  const transformData = useMemo(() => {
    if (data?.data?.content) {
      const contents = data?.data?.content;

      return contents.map((item: PayoutItemType, id: number) => {
        return {
          ...item,
          index: id + 1,
          created: formatDate(item?.created),
          transactionAmount: formatNumber(item?.transactionAmount)
        };
      });
    } else {
      return [];
    }
  }, [data?.data?.content]);

  return (
    <div className='w-full mt-[33px]'>
      <div className='flex items-center mb-[40px] gap-[20px]'>
        {payoutCardsData.map((item) => (
          <PayoutSummaryCard {...item} key={item.text} />
        ))}
      </div>
      <div className='mt-[40px] mb-[24px] w-full flex justify-between'>
        <h3 className='text-[#000000] text-[20px] font-semi-bold'>Recent Payout</h3>
      </div>
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
            <TableEmptyLayout
              containerHeight='300px'
              buttonText='Reload'
              title='No recent payouts'
              subTitle='Looks like you haven’t made any payout, no worries! '
              onControlClick={() => {}}
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

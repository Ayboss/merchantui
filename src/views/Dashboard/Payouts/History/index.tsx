<<<<<<< HEAD
import React from 'react';
import { formatNumber } from '../../../../utils';
import { CustomTable, LoaderControl, TableEmptyLayout } from '../../../../components';
// import { useGetPayoutsQuery } from '../../../../services/hooks';
=======
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate, formatNumber } from '../../../../utils';
import { CustomTable, LoaderControl, Paginator, TableEmptyLayout } from '../../../../components';
import { PayoutItemType, useGetPayoutsQuery } from '../../../../services/hooks';
import { PRIVATE_PATHS } from '../../../../routes/paths';
>>>>>>> 81ad2d6 (feat: created wallet queries)
import { PayoutSummaryCard, PayoutSummaryCardPropsType } from './components';
import { ReactComponent as Icon } from './icons/balance.svg';
import { MOCK_PAYOUT_DATA, MOCK_PAYOUT_HISTORY_HEADER } from './mock';

export const PayoutHistory: React.FC = () => {
  //   const { data } = useGetPayoutsQuery();

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

<<<<<<< HEAD
=======
  const [query, setQuery] = useState({
    page: 0
  });
  const [currentDetails, setCurrentDetails] = useState<PayoutItemType | null>(null);
  const [showPayoutDetails, setShowPayoutDetails] = useState(false);
  const { data, isError, refetch, isFetching } = useGetPayoutsQuery();
  const navigate = useNavigate();

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

>>>>>>> 81ad2d6 (feat: created wallet queries)
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
        loading={false}
        error={false}
        overlay={false}
        errorTitle='Something went wrong'
        errorSubTitle="Sorry, we couldn't load your payouts, try reloading"
        minHeight={'400px'}
        errorControlOnClick={() => {}}
      >
        <CustomTable
          onRowClick={() => {
            // @ts-ignore incompatible amount and created type
            // setCurrentDetails(detail);
            // setShowTransactionItemDetail(true);
          }}
          data={MOCK_PAYOUT_DATA}
          headers={MOCK_PAYOUT_HISTORY_HEADER}
          emptyLayout={
            <TableEmptyLayout
              containerHeight='300px'
              buttonText='Make Payout'
              title='No recent payouts'
              subTitle='Looks like you haven’t made any payout, no worries! '
              onControlClick={() => navigate(PRIVATE_PATHS.PAYOUT_OPTIONS)}
            />
          }
        />
      </LoaderControl>
    </div>
  );
};

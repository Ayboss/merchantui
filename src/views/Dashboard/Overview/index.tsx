import React, { useMemo } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
import {
  Button,
  CustomTable,
  EmptyContent,
  LoaderControl
  // inlineButtonClass
} from '../../../components';
// import { AlertBar } from '../../../components/AlertBar';
import { PRIVATE_PATHS } from '../../../routes/paths';
import {
  PayoutItemType,
  TransactionItemType,
  useGetPayoutsQuery,
  useGetTransactionsQuery
} from '../../../services/hooks';
import { RecentTransactionsHeader } from '../Transactions/constants';
import { formatDate, formatNumber } from '../../../utils';
import { RecentPayoutsHeader } from '../Payouts/History/constants';
import { CardContainer } from './components';
import { ListContainer } from './components/ListContainer';
const Overview = () => {
  // const navigate = useNavigate();

  const {
    data,
    isError: isTransactionsError,
    refetch: refetchTransactions,
    isLoading: isTransactionsLoading
  } = useGetTransactionsQuery({ page: 0 });

  const {
    data: payoutList,
    isError: isPayoutError,
    refetch: refetchPayouts,
    isLoading: isPayoutsLoading
  } = useGetPayoutsQuery({ page: 1 });

  const transformTransactionsData = useMemo(() => {
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

  const transformPayoutsData = useMemo(() => {
    if (payoutList?.data?.content) {
      const contents = payoutList?.data?.content;

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
  }, [payoutList?.data?.content]);

  return (
    <div className='w-full h-full'>
      <div className='flex w-full justify-between mb-[14px]'>
        {/* <AlertBar
          text='Please Complete your KYC'
          cta={
            <Button
              name={'Complete KYC'}
              onClick={() => navigate(PRIVATE_PATHS.KYC_VERIFICATION)}
              className={clsx(inlineButtonClass, 'text-[#F2B00F] text-base font-medium underline')}
            />
          }
        /> */}
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <CardContainer />
        <div className='flex items-stretch gap-5 '>
          <ListContainer
            type='transactions'
            className=' w-full flex-grow'
            renderCta={(className) => (
              <Button
                className={clsx(className)}
                type='link'
                href={PRIVATE_PATHS.TRANSACTIONS}
                name={
                  <span
                    className={clsx(
                      'text-[12px] font-medium',
                      transformTransactionsData.length > 0 ? 'text-[#6231F4]' : 'text-[#B8BCCA]'
                    )}
                  >
                    See All Transactions{' '}
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={clsx(
                        transformTransactionsData.length > 0 ? 'fill-[#6231F4]' : 'fill-[#b8bcca]'
                      )}
                    />
                  </span>
                }
              />
            )}
          >
            <LoaderControl
              loading={isTransactionsLoading}
              error={isTransactionsError}
              overlay={isTransactionsLoading}
              errorTitle='Something went wrong'
              errorSubTitle="Sorry, we couldn't load your transactions, try reloading"
              minHeight={'350px'}
              errorControlOnClick={() => refetchTransactions()}
            >
              <CustomTable
                data={transformTransactionsData}
                headers={RecentTransactionsHeader}
                length={5}
                emptyLayout={
                  <EmptyContent
                    className='mt-[50px]'
                    text='No recent transactions. Looks like you haven’t made any transaction, no worries! '
                  />
                }
              />
            </LoaderControl>
          </ListContainer>
          {/* <WhiteBGContainer className='w-[30%] flex-grow min-h-[350px]'></WhiteBGContainer> */}
        </div>
        <div className='flex items-stretch gap-5 '>
          <ListContainer
            type='payouts'
            className=' w-full flex-grow'
            renderCta={(className) => (
              <Button
                className={clsx(className)}
                type='link'
                href={PRIVATE_PATHS.PAYOUT_HISTORY}
                name={
                  <span
                    className={clsx(
                      'text-[12px] font-medium',
                      transformPayoutsData.length > 0 ? 'text-[#6231F4]' : 'text-[#B8BCCA]'
                    )}
                  >
                    See All Payouts{' '}
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className={clsx(
                        transformPayoutsData.length > 0 ? 'fill-[#6231F4]' : 'fill-[#b8bcca]'
                      )}
                    />
                  </span>
                }
              />
            )}
          >
            <LoaderControl
              loading={isPayoutsLoading}
              error={isPayoutError}
              overlay={isPayoutsLoading}
              errorTitle='Something went wrong'
              errorSubTitle="Sorry, we couldn't load your payouts, try reloading"
              minHeight={'350px'}
              errorControlOnClick={() => refetchPayouts()}
            >
              <CustomTable
                data={transformPayoutsData}
                headers={RecentPayoutsHeader}
                length={5}
                emptyLayout={
                  <EmptyContent
                    className='mt-[50px]'
                    text='No recent payouts. Looks like you haven’t made any payout, no worries! '
                  />
                }
              />
            </LoaderControl>
          </ListContainer>
          {/* <WhiteBGContainer className='w-[30%] flex-grow min-h-[350px]'></WhiteBGContainer> */}
        </div>
      </div>
    </div>
  );
};

export default Overview;

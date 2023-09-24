import React, { useMemo } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  CustomTable,
  EmptyContent,
  LoaderControl,
  inlineButtonClass
} from '../../../components';
import { AlertBar } from '../../../components/AlertBar';
import { PRIVATE_PATHS } from '../../../routes/paths';
import { TransactionItemType, useGetTransactionsQuery } from '../../../services/hooks';
import { RecentTransactionsHeader } from '../Transactions/constants';
import { formatDate, formatNumber } from '../../../utils';
import { CardContainer } from './components';
import { ListContainer, WhiteBGContainer } from './components/ListContainer';
const Overview = () => {
  const {
    data,
    isError: isTransactionsError,
    refetch: isTransactionsRefetch,
    isLoading: isTransactionsLoading
  } = useGetTransactionsQuery({ page: 1 });

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

  return (
    <div className='w-full h-full'>
      <div className='flex w-full justify-between mb-[14px]'>
        <AlertBar
          text='Please Complete your KYC'
          cta={
            <Button
              name={'Complete KYC'}
              className={clsx(inlineButtonClass, 'text-[#F2B00F] text-base font-medium underline')}
            />
          }
        />
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <CardContainer />
        <div className='flex items-stretch gap-5 '>
          <ListContainer
            type='transactions'
            className=' w-[70%] flex-grow'
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
              errorControlOnClick={() => isTransactionsRefetch()}
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
          <WhiteBGContainer className='w-[30%] flex-grow min-h-[350px]'></WhiteBGContainer>
        </div>
        <div className='flex items-stretch gap-5 '>
          <ListContainer
            type='payouts'
            className=' w-[70%] flex-grow'
            renderCta={(className) => (
              <Button
                className={clsx(className)}
                type='link'
                href={PRIVATE_PATHS.PAYOUT_HISTORY}
                name={
                  <span className='text-[#B8BCCA] text-[12px] font-medium'>
                    See All Settlements{' '}
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: '#b8bcca' }} />
                  </span>
                }
              />
            )}
          >
            <EmptyContent />
          </ListContainer>
          <WhiteBGContainer className='w-[30%] flex-grow min-h-[350px]'></WhiteBGContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;

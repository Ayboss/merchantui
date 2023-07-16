import React, { useEffect } from 'react';
import { useOverviewChartQuery } from '../../../../services/hooks/useOverviewQuery';
import { ReactComponent as Spinner } from '../../../../assets/icons/spinner.svg';
import { formatNumber } from '../../../../utils';
import { LineChart } from './LineChart';
import { Amount, Title, Wrapper, WrapperRelative } from './styles';
import { CardTransactionType } from './types';

export const CardTransaction: React.FC<CardTransactionType> = (props) => {
  const { startDate, endDate, type } = props;

  const { data, isLoading, refetch, isRefetching } = useOverviewChartQuery({
    type,
    startDate,
    endDate
  });

  useEffect(() => {
    (() => refetch())();
  }, [startDate, endDate, type, refetch]);

  return (
    <WrapperRelative>
      {isLoading || isRefetching ? (
        <div className={`h-[319px] relative`}>
          <div
            className={`w-full h-full flex flex-col justify-center items-center absolute overlay`}
          >
            <Spinner />
          </div>
        </div>
      ) : (
        <>
          <Wrapper className={'py-[14px]'}>
            <Wrapper className={'flex'}>
              <Wrapper className={'pr-[34px]'}>
                <Amount className='text-[14px]'>
                  ₦‎ {formatNumber(data?.data?.totalVolume ?? 0)}
                </Amount>
                <Title>Volume</Title>
              </Wrapper>
              <Wrapper className={'px-[34px] border-y-1 border-[#000000]'}>
                <Amount className='text-[14px]'>{data?.data?.totalValue ?? 0}</Amount>
                <Title>Value</Title>
              </Wrapper>
              <Wrapper className={'px-[34px] border-y-1 border-[#000000]'}>
                <Amount className='text-[14px]'>{data?.data?.successfulTransactions ?? 0}</Amount>
                <Title>Successful</Title>
              </Wrapper>
              <Wrapper className={'px-[34px]'}>
                <Amount className='text-[14px]'>{data?.data?.failedTransactions ?? 0}</Amount>
                <Title>Failed</Title>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <LineChart data={data} />
        </>
      )}
    </WrapperRelative>
  );
};

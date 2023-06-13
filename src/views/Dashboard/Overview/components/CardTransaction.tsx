import React from 'react';
import { useOverviewChartQuery } from '../../../../services/hooks/useOverviewQuery';
import { ReactComponent as Spinner } from '../../../../assets/icons/spinner.svg';
import { LineChart } from './LineChart';
import { Amount, Title, Wrapper, WrapperRelative } from './styles';
import { CardTransactionType } from './types';

export const CardTransaction: React.FC<CardTransactionType> = (props) => {
  const { startDate, endDate, type } = props;

  const { data, isLoading } = useOverviewChartQuery({
    type,
    startDate,
    endDate
  });

  return (
    <WrapperRelative>
      {isLoading ? (
        <div className={`h-[319px] relative`}>
          <div
            className={`w-full h-full flex flex-col justify-center items-center absolute overlay`}
          >
            <Spinner />
          </div>
        </div>
      ) : (
        <>
          <Wrapper className={'py-[34px]'}>
            <Wrapper className={'flex'}>
              <Wrapper className={'pr-[34px]'}>
                <Amount>N 0</Amount>
                <Title>Volume</Title>
              </Wrapper>
              <Wrapper className={'px-[34px] border-y-1 border-[#000000]'}>
                <Amount>N 0</Amount>
                <Title>Value</Title>
              </Wrapper>
              <Wrapper className={'px-[34px] border-y-1 border-[#000000]'}>
                <Amount>0</Amount>
                <Title>Successful</Title>
              </Wrapper>
              <Wrapper className={'px-[34px]'}>
                <Amount>0</Amount>
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

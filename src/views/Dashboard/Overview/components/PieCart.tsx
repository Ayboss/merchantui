import React, { useEffect } from 'react';
import { VictoryPie } from 'victory';
import {
  Box,
  BoxPercentage,
  BoxPercentageTitle,
  FlexWrapper,
  Percentage,
  PercentageTitle,
  Wrapper,
  WrapperOverlay,
  WrapperRelative
} from '../styles';
import { ReactComponent as Spinner } from '../../../../assets/icons/spinner.svg';
import { useOverviewPieChartQuery } from '../../../../services/hooks/useOverviewQuery';
import { colorBars, colorKey, pieDefault } from '../mock';
import { PieCartType } from './types';

export const PieCart: React.FC<PieCartType> = (props) => {
  const { startDate, endDate } = props;
  const { data, isLoading, refetch, isRefetching } = useOverviewPieChartQuery({
    startDate,
    endDate
  });

  useEffect(() => {
    (() => refetch())();
  }, [startDate, endDate, refetch]);

  let pieChartData = data?.data?.data ?? [];

  pieChartData = pieChartData.length === 0 ? pieDefault : pieChartData;

  const handleDataColorAttach = () => {
    return pieChartData.map((data) => colorBars[data.x as colorKey]);
  };

  return (
    <Wrapper>
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
          <WrapperRelative className={'my-18'}>
            <VictoryPie
              animate={{
                duration: 1000
              }}
              width={380}
              height={380}
              colorScale={handleDataColorAttach()}
              padding={50}
              data={pieChartData}
              labelRadius={({ innerRadius }) => (innerRadius ? +innerRadius + 5 : 0)}
              radius={({ datum }) => (datum.x === 'BANKTRANSFER' ? 162 : 150)}
              innerRadius={110}
              style={{ labels: { display: 'none' } }}
            />
            <WrapperOverlay>
              <Percentage>0%</Percentage>
              <PercentageTitle>
                Card <br /> Transaction
              </PercentageTitle>
            </WrapperOverlay>
          </WrapperRelative>
          <Wrapper>
            <Wrapper className='grid grid-cols-1'>
              {pieChartData.map((pieChart, id) => (
                <FlexWrapper key={id}>
                  <Box
                    className={`w-[20px] h-[20px] mr-3 border-radius-[2px]`}
                    style={{ backgroundColor: colorBars[pieChart.x as colorKey] }}
                  />
                  <Wrapper>
                    <BoxPercentageTitle>{pieChart.x}</BoxPercentageTitle>
                    <BoxPercentage>{pieChart.y}%</BoxPercentage>
                  </Wrapper>
                </FlexWrapper>
              ))}
            </Wrapper>
          </Wrapper>
        </>
      )}
    </Wrapper>
  );
};

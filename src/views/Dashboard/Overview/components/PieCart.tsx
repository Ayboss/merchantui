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
import { colorBars, colorKey } from '../mock';
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

  const getBoxColor = (type: string) => {
    switch (type) {
      case 'CARD':
        return 'bg-[#F09636]';
      case 'BANKTRANSFER':
        return 'bg-[#6231F4]';
      case 'PAYOUTTRANSFERIN':
        return 'bg-[#F5C544]';
      default:
        return 'bg-[#F5C544]';
    }
  };

  const pieChartData = data?.data?.data ?? [];

  const uniquePieChartData = Array.from(
    new Map(pieChartData.map((item) => [item?.x, item])).values()
  );

  const handleDataColorAttach = () => {
    return uniquePieChartData.map((data) => colorBars[data.x as colorKey]);
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
              data={uniquePieChartData}
              labelRadius={({ innerRadius }) => (innerRadius ? +innerRadius + 5 : 0)}
              radius={({ datum }) => (datum.x === 'BANKTRANSFER' ? 162 : 150)}
              innerRadius={110}
              style={{ labels: { display: 'none' } }}
              categories={{ x: ['BANKTRANSFER', 'CARD', 'PAYOUTTRANSFERIN'] }}
            />
            <WrapperOverlay>
              <Percentage></Percentage>
              <PercentageTitle>Transaction Activity</PercentageTitle>
            </WrapperOverlay>
          </WrapperRelative>
          <Wrapper>
            <Wrapper className='flex flex-wrap gap-2'>
              {uniquePieChartData.map((pieChart, id) => {
                const color = getBoxColor(pieChart?.x);

                return (
                  <FlexWrapper key={`${id}`}>
                    <Box className={color} />
                    <Wrapper>
                      <BoxPercentageTitle>{pieChart.x}</BoxPercentageTitle>
                      <BoxPercentage>{pieChart.y}%</BoxPercentage>
                    </Wrapper>
                  </FlexWrapper>
                );
              })}
            </Wrapper>
          </Wrapper>
        </>
      )}
    </Wrapper>
  );
};

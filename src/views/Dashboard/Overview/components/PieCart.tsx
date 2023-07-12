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
import { PieCartType } from './types';

export const PieCart: React.FC<PieCartType> = (props) => {
  const { startDate, endDate } = props;
  const { data, isLoading, refetch } = useOverviewPieChartQuery({
    startDate,
    endDate
  });

  useEffect(() => {
    (() => refetch())();
  }, [startDate, endDate, refetch]);

  const pieChartData = data?.data?.data ?? [];
  const uniquePieChartData = Array.from(
    new Map(pieChartData.map((item) => [item?.x, item])).values()
  );

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

  return (
    <Wrapper>
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
          <WrapperRelative className={'my-18'}>
            <VictoryPie
              animate={{
                duration: 1000
              }}
              width={400}
              height={400}
              colorScale={['#6231F4', '#F09636', '#F5C544']}
              padding={50}
              data={uniquePieChartData}
              labelRadius={({ innerRadius }) => (innerRadius ? +innerRadius + 5 : 0)}
              radius={({ datum }) => (datum.x === 'BANKTRANSFER' ? 180 : 160)}
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
                  <FlexWrapper key={id}>
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

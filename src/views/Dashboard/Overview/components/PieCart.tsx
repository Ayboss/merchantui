import React from 'react';
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
import { PieCartType } from './types';

export const PieCart: React.FC<PieCartType> = (props) => {
  const { data, loading } = props;

  const pieChartData = data?.data?.data ?? [];

  return (
    <Wrapper>
      {loading ? (
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
              colorScale={['#6231F4', '#F09636', '#F5C544', '#EB5757']}
              padding={50}
              data={pieChartData}
              labelRadius={({ innerRadius }) => (innerRadius ? +innerRadius + 5 : 0)}
              radius={({ datum }) => (datum.x === 'BANKTRANSFER' ? 180 : 160)}
              innerRadius={110}
              style={{ labels: { display: 'none' } }}
            />
            <WrapperOverlay>
              <Percentage>0%</Percentage>
              <PercentageTitle>Card Transaction</PercentageTitle>
            </WrapperOverlay>
          </WrapperRelative>
          <Wrapper>
            <Wrapper className='grid grid-cols-2 gap-2'>
              {pieChartData.map((pieChart, id) => (
                <FlexWrapper key={id}>
                  <Box className={`bg-[#F09636]`} />
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

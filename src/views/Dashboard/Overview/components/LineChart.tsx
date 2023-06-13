import React from 'react';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryGroup, VictoryStack } from 'victory';
import {
  Title,
  Wrapper,
  WrapperOverlayBottom,
  WrapperOverlayLeft,
  WrapperRelative
} from './styles';
import { LineChartType } from './types';

export const LineChart: React.FC<LineChartType> = (props) => {
  const { data } = props;

  const chartData = data?.data?.data ?? [];

  return (
    <WrapperRelative>
      <Wrapper className={'ml-4'}>
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient
              id='myGradient'
              x1='0.0220033'
              y1='228'
              x2='0.0220033'
              y2='0.0180459'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0.01' />
              <stop offset='0.999921' stopColor='#6231F4' />
            </linearGradient>
          </defs>
        </svg>

        <VictoryChart
          minDomain={{ y: 0 }}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 }
          }}
          height={220}
          padding={26}
          style={{
            parent: {
              border: '0px solid #ccc'
            },
            background: {
              fill: 'white'
            }
          }}
        >
          <VictoryStack>
            <VictoryGroup>
              <VictoryArea
                colorScale={['#6231F4']}
                style={{
                  data: { fill: 'url(#myGradient)', stroke: '#6231F4' }
                }}
                interpolation='natural'
                data={chartData}
              />
            </VictoryGroup>
          </VictoryStack>
          <VictoryAxis
            style={{
              tickLabels: {
                fontSize: '9px',
                fontFamily: 'inherit',
                fillOpacity: 1,
                marginTop: 10,
                padding: 0
              },
              axisLabel: {
                fontsize: 13
              }
            }}
            tickValues={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28]}
          />
          <VictoryAxis
            tickFormat={(x) => (x === 0 ? 0 : `${x}%`)}
            dependentAxis
            tickValues={[0, 20, 40, 60, 80, 100]}
            style={{
              axis: {
                stroke: 'url(#myGradientk',
                fill: 'url(#myGradient)',
                strokeWidth: 20
              },
              grid: {
                stroke: 'rgba(0, 0, 0, 0.2)',
                strokeWidth: 1
              },
              tickLabels: {
                fontSize: '9px',
                fontFamily: 'inherit',
                fillOpacity: 1,
                marginLeft: 10,
                padding: 0
              },
              axisLabel: {
                fontsize: 13
              }
            }}
          />
        </VictoryChart>
      </Wrapper>

      <WrapperOverlayLeft>
        <Title>Transaction Volume</Title>
      </WrapperOverlayLeft>
      <WrapperOverlayBottom>
        <Title>No of Days</Title>
      </WrapperOverlayBottom>
    </WrapperRelative>
  );
};

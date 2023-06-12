import React from 'react';
import { VictoryPie } from 'victory';
import { Percentage, PercentageTitle, WrapperOverlay, WrapperRelative } from '../styles';

export const PieCart = () => {
  return (
    <WrapperRelative className={'my-18'}>
      <VictoryPie
        animate={{
          duration: 1000
        }}
        width={400}
        height={400}
        colorScale={['#6231F4', '#F09636', '#F5C544', '#EB5757']}
        padding={50}
        data={[
          { x: 'Card Payment', y: 34 },
          { x: 'Bank Transfer', y: 32 },
          { x: 'Qr Code', y: 24 },
          { x: 'USSD', y: 10 }
        ]}
        labelRadius={({ innerRadius }) => (innerRadius ? +innerRadius + 5 : 0)}
        radius={({ datum }) => (datum.x === 'Card Payment' ? datum.y * 5.2 : 160)}
        innerRadius={110}
        style={{ labels: { display: 'none' } }}
      />
      <WrapperOverlay>
        <Percentage>34%</Percentage>
        <PercentageTitle>Card Transaction</PercentageTitle>
      </WrapperOverlay>
    </WrapperRelative>
  );
};

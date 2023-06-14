import React, { useState } from 'react';
import { VictoryPie } from 'victory';
import { Card } from '../../../components';
import { CardContainer, CardTransaction } from './components';
import { TabItems, TransactionsOverviews } from './mock';
import {
  Percentage,
  PercentageTitle,
  Tab,
  TabItem,
  TabWrapper,
  Title,
  Wrapper,
  WrapperGrid,
  WrapperOverlay,
  WrapperRelative,
  Box,
  BoxPercentageTitle,
  BoxPercentage,
  FlexWrapper
} from './styles';
import { selectType } from './types';

const Overview = () => {
  const [selected, setSelected] = useState<selectType>('card');

  const { data: summaryData, isLoading } = useTransactionsSummaryQuery();

  return (
    <>
      <CardContainer items={TransactionsOverviews} />
      <Wrapper className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
        <WrapperGrid>
          <Card>
            <Title>Transaction Charts</Title>
            <Tab>
              <TabWrapper>
                {TabItems.map((item, id) => (
                  <TabItem
                    key={id}
                    $current={item.key}
                    $selected={selected}
                    onClick={() => setSelected(item.key)}
                  >
                    {item.title}
                  </TabItem>
                ))}
              </TabWrapper>
            </Tab>
            <Wrapper>{selected === 'card' && <CardTransaction />}</Wrapper>
          </Card>
        </WrapperGrid>

        <Card>
          <Title>Activity</Title>
          <WrapperRelative>
            <VictoryPie
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

          <Wrapper>
            <Wrapper className='grid grid-cols-2 gap-6'>
              <FlexWrapper>
                <Box className={`bg-[#F09636]`} />
                <Wrapper>
                  <BoxPercentageTitle>Card Transaction</BoxPercentageTitle>
                  <BoxPercentage>34%</BoxPercentage>
                </Wrapper>
              </FlexWrapper>
              <FlexWrapper>
                <Box className={`bg-[#F09636]`} />
                <Wrapper>
                  <BoxPercentageTitle>Bank Transfer</BoxPercentageTitle>
                  <BoxPercentage>32%</BoxPercentage>
                </Wrapper>
              </FlexWrapper>
              <FlexWrapper>
                <Box className={`bg-[#F09636]`} />
                <Wrapper>
                  <BoxPercentageTitle>QR Code</BoxPercentageTitle>
                  <BoxPercentage>24%</BoxPercentage>
                </Wrapper>
              </FlexWrapper>
              <FlexWrapper>
                <Box className={`bg-[#F09636]`} />
                <Wrapper>
                  <BoxPercentageTitle>USSD Payment</BoxPercentageTitle>
                  <BoxPercentage>10%</BoxPercentage>
                </Wrapper>
              </FlexWrapper>
            </Wrapper>
          </Wrapper>
        </Card>
      </Wrapper>
    </>
  );
};

export default Overview;

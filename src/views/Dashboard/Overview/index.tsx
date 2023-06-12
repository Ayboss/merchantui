import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Card } from '../../../components';
import { overviewQuery } from '../../../services/hooks';
import { CardContainer, CardTransaction, PieCart } from './components';
import { TabItems } from './mock';
import {
  Tab,
  TabItem,
  TabWrapper,
  Title,
  Wrapper,
  WrapperGrid,
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
      <CardContainer loading={isLoading} data={data} />
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
          <PieCart />

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

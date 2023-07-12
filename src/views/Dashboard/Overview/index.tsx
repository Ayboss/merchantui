import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { endOfDay, format, subMonths } from 'date-fns';
import { Card } from '../../../components';
import { useTransactionsSummaryQuery } from '../../../services/hooks';
import { CardContainer, CardTransaction, PieCart } from './components';
import { TabItems } from './mock';
import {
  Tab,
  TabItem,
  TabWrapper,
  Title,
  Wrapper,
  WrapperGrid,
  TopWrapper,
  DateWrapper
} from './styles';
import { selectedDateType, selectType } from './types';

const Overview = () => {
  const now = endOfDay(new Date());
  const [selected, setSelected] = useState<selectType>('banktransfer');
  const [selectedDate, setSelectedDate] = useState<selectedDateType>({
    startDate: format(subMonths(now, 6), 'yyyy-MM-dd'),
    endDate: format(now, 'yyyy-MM-dd')
  });

  const { data: summaryData, isLoading: summaryLoading } = useTransactionsSummaryQuery();

  const handleValueChange = (newValue: any) => {
    setSelectedDate(newValue);
  };

  return (
    <>
      <TopWrapper>
        <Wrapper>
          <Title>Dashboard</Title>
          <p>Card Payment statistics for</p>
        </Wrapper>
        <Wrapper className={'flex justify-end'}>
          <DateWrapper>
            <Datepicker
              primaryColor={'#6231F4'}
              value={selectedDate}
              showShortcuts={true}
              onChange={handleValueChange}
            />
          </DateWrapper>
        </Wrapper>
      </TopWrapper>

      <CardContainer loading={summaryLoading} summaryData={summaryData} />
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
            <Wrapper>
              <CardTransaction
                startDate={selectedDate.startDate}
                endDate={selectedDate.endDate}
                type={selected}
              />
            </Wrapper>
          </Card>
        </WrapperGrid>

        <Card>
          <Title>Activity</Title>
          <PieCart startDate={selectedDate.startDate} endDate={selectedDate.endDate} />
        </Card>
      </Wrapper>
    </>
  );
};

export default Overview;

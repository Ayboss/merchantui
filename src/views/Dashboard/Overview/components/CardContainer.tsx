import React from 'react';
import { Card } from '../../../../components';
import { formatNumber } from '../../../../utils';
import { useMerchantStatsQuery } from '../../../../services/hooks';
import { Container } from './styles';
import { CardContainerType, CardItemType } from './types';

export const CardContainer: React.FC<Partial<CardContainerType>> = (props) => {
  const { summaryData } = props;

  const { data } = useMerchantStatsQuery();

  const TransactionsOverviews: CardItemType = [
    {
      amount: `₦‎${formatNumber(summaryData?.data?.transactionValue ?? 0)}`,
      title: "Today's Transaction"
    },
    {
      amount: '0',
      title: "Today's Transaction Volume"
    },
    {
      amount: `₦‎${formatNumber(data?.data?.walletsBalance ?? 0)}`,
      title: 'Total Settlements'
    },
    {
      amount: String(data?.data?.nextSettlementValue ?? 0),
      title: 'Total Payouts'
    }
  ];

  return (
    <Container>
      {TransactionsOverviews.map((item) => (
        <Card {...item} key={item.title} />
      ))}
    </Container>
  );
};

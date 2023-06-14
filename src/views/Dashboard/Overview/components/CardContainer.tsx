import React from 'react';
import { Card } from '../../../../components';
import { Amount, Container, Title } from './styles';
import { CardContainerType, CardItemType } from './types';
import { Loading } from './Loading';

export const CardContainer: React.FC<CardContainerType> = (props) => {
  const { loading, summaryData } = props;

  const TransactionsOverviews: CardItemType = [
    {
      amount: formatNumber(summaryData?.data?.transactionValue ?? 0),
      title: 'Transaction Value'
    },
    {
      amount: formatNumber(summaryData?.data?.transactionVolume ?? 0),
      title: 'Transaction Volume'
    },
    {
      amount: formatNumber(summaryData?.data?.successfulTransaction ?? 0),
      title: 'Wallet Balance'
    },
    {
      amount: formatNumber(summaryData?.data?.failedTransaction ?? 0),
      title: 'Next Settlement'
    }
  ];

  return (
    <Container>
      {items.map(({ amount, title }, id) => (
        <Card key={id}>
          <Amount>{amount}</Amount>
          <Title>{title}</Title>
        </Card>
      ))}
    </Container>
  );
};

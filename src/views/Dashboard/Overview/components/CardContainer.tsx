import React from 'react';
import { Card } from '../../../../components';
import { formatNumber } from '../../../../utils';
import { useMerchantStatsQuery } from '../../../../services/hooks';
import { Amount, Container, Title } from './styles';
import { CardContainerType, CardItemType } from './types';
import { Loading } from './Loading';

export const CardContainer: React.FC<CardContainerType> = (props) => {
  const { loading, summaryData } = props;

  const { data, isLoading } = useMerchantStatsQuery();

  const TransactionsOverviews: CardItemType = [
    {
      amount: `₦‎${formatNumber(summaryData?.data?.transactionValue ?? 0)}`,
      title: 'Transaction Value'
    },
    {
      amount: String(summaryData?.data?.transactionVolume) ?? 0,
      title: 'Transaction Volume'
    },
    {
      amount: `₦‎${formatNumber(data?.data?.walletsBalance ?? 0)}`,
      title: 'Wallet Balance'
    },
    {
      amount: String(data?.data?.nextSettlementValue ?? 0),
      title: 'Next Settlement'
    }
  ];

  return (
    <Container>
      {TransactionsOverviews.map(({ amount, title }, id) => (
        <Card key={id}>
          {loading || isLoading ? (
            <Loading />
          ) : (
            <>
              <Amount>{amount}</Amount>
              <Title>{title}</Title>
            </>
          )}
        </Card>
      ))}
    </Container>
  );
};

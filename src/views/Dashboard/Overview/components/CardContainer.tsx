import React from 'react';
import { Card } from '../../../../components';
import { Amount, Container, Title } from './styles';
import { CardContainerType } from './types';
import { Loading } from './Loading';

export const CardContainer: React.FC<CardContainerType> = (props) => {
  const { loading, data } = props;

  const formatMoney = (amount: string | undefined) => {
    return `₦${String(amount).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  };

  return (
    <Container>
      <Card>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Amount>{formatMoney(data?.transactionValue)}</Amount>
            <Title>Transaction Value</Title>
          </>
        )}
      </Card>
      <Card>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Amount>{formatMoney(data?.transactionVolume)}</Amount>
            <Title>Transaction Volume</Title>
          </>
        )}
      </Card>
      <Card>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Amount>{formatMoney(data?.successfulTransaction)}</Amount>
            <Title>Wallet Balance</Title>
          </>
        )}
      </Card>
      <Card>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Amount>{formatMoney(data?.failedTransaction)}</Amount>
            <Title>Next Settlement</Title>
          </>
        )}
      </Card>
    </Container>
  );
};

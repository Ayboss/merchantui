import React from 'react';
import { Card } from '../../../../components';
import { Amount, Container, Title } from './styles';
import { CardContainerType } from './types';

export const CardContainer: React.FC<CardContainerType> = (props) => {
  const { items } = props;

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

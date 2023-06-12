import React from 'react';
import { Amount, Container, Title } from './styles';
import { CardContainerType } from './types';

export const CardContainer: React.FC<CardContainerType> = (props) => {
  const { items } = props;

  return (
    <>
      {items.map(({ amount, title }, id) => (
        <Container key={id}>
          <Amount>{amount}</Amount>
          <Title>{title}</Title>
        </Container>
      ))}
    </>
  );
};

import React from 'react';
import { Container } from './styles';
import { CardType } from './type';

export const Card: React.FC<CardType> = ({ children }) => {
  return <Container>{children}</Container>;
};

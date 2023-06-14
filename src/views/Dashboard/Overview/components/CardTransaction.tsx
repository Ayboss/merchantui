import React from 'react';
import { Amount, Title, Wrapper } from './styles';

export const CardTransaction = () => {
  return (
    <Wrapper className={'py-[34px]'}>
      <Wrapper className={'flex'}>
        <Wrapper className={'pr-[34px]'}>
          <Amount>N 48,000,00</Amount>
          <Title>Volume</Title>
        </Wrapper>
        <Wrapper className={'px-[34px] border-y-1 border-[#000000]'}>
          <Amount>N 48,000,00</Amount>
          <Title>Value</Title>
        </Wrapper>
        <Wrapper className={'px-[34px] border-y-1 border-[#000000]'}>
          <Amount>8,750</Amount>
          <Title>Successful</Title>
        </Wrapper>
        <Wrapper className={'px-[34px]'}>
          <Amount>8,750</Amount>
          <Title>Failed</Title>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

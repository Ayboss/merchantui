import React from 'react';
import tw from 'tailwind-styled-components';

export type TransactionCardPropsType = {
  amount: string | number;
  title: string;
  text: string;
};

export const TransactionCard: React.FC<TransactionCardPropsType> = (props) => {
  const { amount, text, title } = props;

  return (
    <TransactionCardContainer>
      <Amount>{amount}</Amount>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </TransactionCardContainer>
  );
};

const TransactionCardContainer = tw.div`
  bg-[#FFFFFF]
  rounded-[8px]
  border-[1px solid rgba(221, 224, 226, 0.25)]
  flex
  flex-col
  items-center
  gap-[2px]
  h-[167px]
  justify-center
  px-[34px]
`;

const Amount = tw.h3`
    font-semi-bold
    text-[#28313A]
    text-[18px]
    text-center
`;

const Title = tw.p`
    text-[#16181D]
    font-medium
    text-[14px]
    text-center
`;

const Text = tw.p`
    text-[#849DAE]
    text-[14px]
    font-regular
    text-center
    
`;

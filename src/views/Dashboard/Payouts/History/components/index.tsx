import React, { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

export type PayoutSummaryCardPropsType = {
  amount: string | number;
  text: string;
  icon: ReactNode;
};

export const PayoutSummaryCard: React.FC<PayoutSummaryCardPropsType> = (props) => {
  const { amount, text, icon } = props;

  return (
    <PayoutSummaryCardContainer>
      {icon}
      <div className='flex flex-col '>
        <Amount>{amount}</Amount>
        <Text>{text}</Text>
      </div>
    </PayoutSummaryCardContainer>
  );
};

const PayoutSummaryCardContainer = tw.div`
  bg-[#FFFFFF]
  rounded-[4px]
  border-[1px solid rgba(221, 224, 226, 0.25)]
  flex
  items-center
  gap-[20px]
  h-[119px]
  px-[24px]
  w-full
`;

const Amount = tw.h3`
    text-[#28313A]
    text-[20px]
    font-semi-bold
`;

const Text = tw.p`
    text-[rgba(22, 24, 29, 0.5)]
    font-normal
    text-[14px]
`;

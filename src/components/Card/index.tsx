import React from 'react';
import { CardType } from './type';

export const Card: React.FC<CardType> = ({ title, amount }) => {
  return (
    <div className=' rounded-[10px] w-full h-[100px] p-[15px] flex flex-col gap-5 justify-start bg-white border-solid border-[1px] border-gray-200'>
      <span className=' text-[#6F7482] font-medium tracking-[1px] uppercase text-[11px]'>
        {title}
      </span>
      <h4 className=' text-[21px] text-[#444] font-bold'>{amount}</h4>
    </div>
  );
};

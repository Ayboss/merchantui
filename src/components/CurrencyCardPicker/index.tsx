import React from 'react';
import clsx from 'clsx';
import {
  CurrencyToFlagMap,
  CurrencyToSymbolMap
} from '../../views/Dashboard/Overview/components/WalletBalanceItem';
import { cn, formatNumber } from '../../utils';

export type CurrencyCardPickerPropsType = {
  currency: 'NGN';
  active: boolean;
  amount: number;
  onClick: () => void;
};

export const CurrencyCardPicker: React.FC<Partial<CurrencyCardPickerPropsType>> = (props) => {
  const { amount = 0, currency = 'NGN', active = true, onClick } = props;

  return (
    <button
      className={cn(
        clsx(
          'w-[280px] h-[90px] relative rounded-[10px] border-solid border-[1px] border-[#E4E4E4] bg-white',
          active && 'border-[#6231F4]'
        )
      )}
      onClick={onClick}
    >
      <div className='flex items-center gap-[10px] py-[25px] px-[10px] '>
        <img className=' h-10 w-10' src={CurrencyToFlagMap[currency]} alt='Country Flag' />
        <div className='flex items-start flex-col'>
          <p className='text-[#6F7482] font-semibold text-[14px] tracking-[1px]'>NGN Balance</p>
          <p className='text-[#444] text-base font-bold leading-normal'>{`${
            CurrencyToSymbolMap[currency]
          }${formatNumber(amount)}`}</p>
        </div>
        <div
          className={cn(
            clsx(
              'h-5 w-5 absolute right-4 top-4 rounded-full border-solid border-[2px] flex items-center justify-center border-[#E4E4E4]',
              active &&
                "before:h-[10px] before:w-[10px] before:bg-[#6231F4] before:content-[''] before:text-[#6231F4] before:rounded-full border-[#6231F4]"
            )
          )}
        />
      </div>
    </button>
  );
};

export const CurrencyCardPickerSkeleton: React.FC = () => {
  return (
    <div className='animate-pulse'>
      <div className='w-[280px] h-[90px] relative rounded-[10px] bg-gray-200 p-4'>
        <div className='flex items-center space-x-4'>
          <div className='w-10 h-10 rounded-full bg-gray-300'></div>
          <div>
            <div className='h-4 bg-gray-300 rounded w-3/4'></div>
            <div className='mt-2 h-4 bg-gray-300 rounded'></div>
          </div>
          <div className='h-5 w-5 absolute right-4 top-4 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

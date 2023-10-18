import React from 'react';
import clsx from 'clsx';
import { cn, formatNumber } from '../../../../utils';
import NigeriaFlag from './icon/NigeriaFlag.png';

export const CurrencyToFlagMap = {
  NGN: NigeriaFlag
};

export const CurrencyToSymbolMap = {
  NGN: '₦'
};

export type WalletBalanceItemPropType = {
  accountNumber: string;
  balance: number;
  currency: 'NGN';
  status?: string;
  created?: string;
  lastUpdated?: string;
};

export const WalletBalanceItem: React.FC<WalletBalanceItemPropType> = (props) => {
  const { currency = 'NGN', accountNumber, balance = 0 } = props;

  return (
    <div
      className={cn(
        clsx(
          'w-full flex items-center justify-between  border-b-[1px] border-solid border-b-[#EBEBED] py-[15px]'
        )
      )}
    >
      <div className='flex items-start gap-[10px]'>
        <img className=' h-10 w-10' src={CurrencyToFlagMap[currency]} alt='Country Flag' />
        <div className=' flex flex-col items-start'>
          <p className=' text-[#6F7482] font-semibold text-[13px] tracking-[1px] leading-normal'>
            Account - {accountNumber}
          </p>
          <p className='text-[#444] text-[16px] font-bold leading-normal'>{`${
            CurrencyToSymbolMap[currency]
          }${formatNumber(balance)}`}</p>
        </div>
      </div>
    </div>
  );
};

export const WalletBalanceItemSkeleton = () => {
  return (
    <div className='flex justify-between w-full border-b border-solid border-gray-200 py-4 animate-pulse'>
      <div className='flex items-start gap-4'>
        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
        <div className='flex flex-col'>
          <div className='h-4 bg-gray-300 rounded w-24'></div>
          <div className='h-4 bg-gray-300 rounded w-32 mt-2'></div>
        </div>
      </div>
      <div className='h-4 bg-gray-300 rounded w-24'></div>
    </div>
  );
};

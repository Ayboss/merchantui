import React from 'react';
import clsx from 'clsx';
import { CurrencyToFlagMap } from '../../views/Dashboard/Overview/components/WalletBalanceItem';
import { cn } from '../../utils';

export type AccountCardPickerPropsType = {
  currency: 'NGN';
  active: boolean;
  account: number;
  onClick: () => void;
};

export const AccountCardPicker: React.FC<Partial<AccountCardPickerPropsType>> = (props) => {
  const { account = 0, currency = 'NGN', active = true, onClick } = props;

  return (
    <button
      className={cn(
        clsx(
          'w-[200px] h-[80px] relative rounded-[10px] border-solid border-[1px] border-[#E4E4E4] bg-white',
          active && 'border-[#6231F4]'
        )
      )}
      onClick={onClick}
    >
      <div className='flex flex-col gap-1 px-[10px] '>
        <img className=' h-7 w-7' src={CurrencyToFlagMap[currency]} alt='Country Flag' />

        <p className='text-[#6F7482] text-left font-medium text-[14px] '>Account No - {account}</p>
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

export const AccountCardPickerSkeleton: React.FC = () => {
  return (
    <div className='animate-pulse'>
      <div className='w-[200px] h-[80px] relative rounded-[10px] bg-gray-200 p-4'>
        <div className='flex flex-col gap-1 px-[10px]'>
          <div className='w-7 h-7 rounded-full bg-gray-300'></div>
          <div>
            <div className='h-4 bg-gray-300 rounded w-3/4'></div>
          </div>
          <div className='h-5 w-5 absolute right-4 top-4 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

import React, { useMemo } from 'react';
import clsx from 'clsx';

export type StatusTagPropsType = {
  type: 'Completed' | 'Pending' | 'Canceled' | 'PROCESSING' | 'FAILED';
};

export const StatusTag: React.FC<StatusTagPropsType> = (props) => {
  const { type = 'Pending' } = props;

  const statusTheme = useMemo(() => {
    switch (type) {
      case 'Completed':
        return {
          background: 'bg-[#DCFCE7]',
          fill: 'bg-[#22C55E]',
          color: 'text-[#22C55E]'
        };
      case 'Pending':
      case 'PROCESSING':
        return {
          background: 'bg-[#FEF9C3]',
          fill: 'bg-[#FACC15]',
          color: 'text-[#713F12]'
        };
      case 'Canceled':
      case 'FAILED':
        return {
          background: 'bg-[#FEE2E2]',
          fill: 'bg-[#EF4444]',
          color: 'text-[#7F1D1D]'
        };
      default:
        return {
          background: 'bg-[#FEF9C3]',
          fill: 'bg-[#FACC15]',
          color: 'text-[#713F12]'
        };
    }
  }, [type]);

  return (
    <div
      className={clsx(
        'rounded-[40px] w-[115px] justify-center items-center flex gap-2  h-[26px]',
        statusTheme.background
      )}
    >
      <div className={clsx('h-2 w-2 rounded-full', statusTheme.fill)} />
      <span className={clsx('text-[12px] font-medium', statusTheme.color)}>{type}</span>
    </div>
  );
};

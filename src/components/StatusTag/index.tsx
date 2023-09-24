import React, { useMemo } from 'react';
import clsx from 'clsx';

export type StatusTagPropsType = {
  type: 'Completed' | 'Pending' | 'Canceled';
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
        return {
          background: 'bg-[#FEF9C3]',
          fill: 'bg-[#FACC15]',
          color: 'text-[#713F12]'
        };
      case 'Canceled':
        return {
          background: 'bg-[#FEE2E2]',
          fill: 'bg-[#EF4444]',
          color: 'text-[#7F1D1D]'
        };
    }
  }, [type]);

  return (
    <div
      className={clsx(
        'rounded-[40px] w-[96px] justify-center items-center flex gap-2  h-[26px]',
        statusTheme.background
      )}
    >
      <div className={clsx('h-2 w-2 rounded-full', statusTheme.fill)} />
      <span className={clsx('text-[12px] font-medium', statusTheme.color)}>{type}</span>
    </div>
  );
};

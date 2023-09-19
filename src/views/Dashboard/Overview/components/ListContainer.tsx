import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { inlineButtonClass } from '../../../../components';

export type ListContainerPropType = {
  type: 'transactions' | 'payouts';
  renderCta: (args: any) => JSX.Element;
  className?: string;
};

export const ListContainer: React.FC<PropsWithChildren<ListContainerPropType>> = (props) => {
  const { type, renderCta, className = '', children } = props;

  return (
    <WhiteBGContainer className={clsx(className, 'h-[350px]')}>
      <div className={clsx('w-full flex items-start justify-between')}>
        <div className='flex flex-col gap-1 justify-start'>
          <p className='text-[#444] text-base leading-6 font-bold capitalize'>{type}</p>
          <span className='text-[#6F7482] text-[13px] font-normal'>Your latest {type}</span>
        </div>
        {renderCta(inlineButtonClass)}
      </div>
      {children}
    </WhiteBGContainer>
  );
};

export const WhiteBGContainer: React.FC<PropsWithChildren & { className?: string }> = ({
  children,
  className
}) => {
  return (
    <div
      className={clsx(
        ' w-full h-[350px] rounded-[10px] bg-white border-solid border-[#E4E4E7] border-[1px] p-5',
        className
      )}
    >
      {children}
    </div>
  );
};

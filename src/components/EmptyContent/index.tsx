import React from 'react';
import clsx from 'clsx';
import { EmptyIcon } from './EmptyIcon';

export type EmptyContentPropsType = {
  text?: string;
  onClick?: () => void;
  className?: string;
};

export const EmptyContent: React.FC<EmptyContentPropsType> = (props) => {
  const {
    text = 'Nothing to show yet. Add a business and start transacting.',
    onClick,
    className
  } = props;

  return (
    <div
      className={clsx(' w-full h-full flex flex-col justify-center items-center gap-4', className)}
    >
      <EmptyIcon onClick={onClick} />
      <div>
        <p className='text-[#6F7482] text-[11px] font-normal text-center leading-4 max-w-[196px]'>
          {text}
        </p>
      </div>
    </div>
  );
};

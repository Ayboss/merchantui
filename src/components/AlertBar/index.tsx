import React from 'react';

export type AlertBarPropType = {
  text: string;
  cta?: JSX.Element;
};

export const AlertBar: React.FC<AlertBarPropType> = (props) => {
  const { cta, text } = props;

  return (
    <div className='flex items-center justify-between rounded-[10px] py-[10px] px-5 bg-[#FFF9EB] w-full max-w-[753px]'>
      <div className='flex items-center gap-[10px]'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12 8V13' stroke='#444444' strokeLinecap='round' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z'
            fill='#444444'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
            stroke='#444444'
          />
        </svg>
        <span className=' text-base font-medium leading-[24px] text-[#333]'>{text}</span>
      </div>
      {cta && cta}
    </div>
  );
};

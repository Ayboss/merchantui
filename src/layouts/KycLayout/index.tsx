import React, { PropsWithChildren } from 'react';
type KycLayoutType = {
  header: string;
  subHeader: string;
};

export const KycLayout: React.FC<PropsWithChildren<KycLayoutType>> = ({
  children,
  header,
  subHeader
}) => {
  return (
    <div className=' h-screen overflow-x-hidden flex flex-col relative items-center gap-[30px]'>
      <div className='flex flex-col'>
        <h1 className='text-[#444] text-center text-[24px] font-bold'>{header}</h1>
        <p className='text-[#6F7482] text-[14px] font-normal leading-6 text-center'>{subHeader}</p>
      </div>
      <svg
        className='absolute top-0 right-[-10%]'
        width='450'
        height='448'
        viewBox='0 0 450 448'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='450' cy='-2' r='449.5' stroke='#F4B61E' strokeOpacity='0.5' />
        <circle cx='450' cy='-2' r='299.5' stroke='#F4B61E' strokeOpacity='0.5' />
        <circle cx='450' cy='-2' r='224.5' stroke='#F4B61E' strokeOpacity='0.5' />
        <circle cx='450' cy='-2' r='149.5' stroke='#F4B61E' strokeOpacity='0.5' />
        <circle cx='450' cy='-2' r='374.5' stroke='#F4B61E' strokeOpacity='0.5' />
      </svg>

      <svg
        className='absolute bottom-0 left-0'
        width='450'
        height='450'
        viewBox='0 0 450 450'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cy='450' r='449.5' stroke='#7B61FF' strokeOpacity='0.5' />
        <circle cy='450' r='299.5' stroke='#7B61FF' strokeOpacity='0.5' />
        <circle cy='450' r='224.5' stroke='#7B61FF' strokeOpacity='0.5' />
        <circle cy='450' r='149.5' stroke='#7B61FF' strokeOpacity='0.5' />
        <circle cy='450' r='374.5' stroke='#7B61FF' strokeOpacity='0.5' />
      </svg>
      {children}
    </div>
  );
};

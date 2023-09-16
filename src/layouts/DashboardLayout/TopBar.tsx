import React from 'react';
import { PayonusIcon } from '../../components/PayonusIcon';

export const TopBar = () => {
  return (
    <div className='w-full px-[44px] py-[15px] shadow-[0px_1px_0px_0px_rgba(18_32_59_0.09)] border-solid border-b border-[#E4E4E7] h-[60px] flex items-center '>
      <PayonusIcon className=' cursor-pointer' isDark />
    </div>
  );
};

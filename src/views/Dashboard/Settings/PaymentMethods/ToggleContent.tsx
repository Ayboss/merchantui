import React, { useState } from 'react';
import clsx from 'clsx';

interface ToggleSwitchProps {
  title: string;
  text?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ title, text }) => {
  const [isPaymentOn, setIsPaymentOn] = useState(false);

  const handleToggle = () => {
    setIsPaymentOn((prev) => !prev);
  };

  return (
    <div className='mb-5'>
      <div className='mr-4'>
        <p className='text-[16px] text-[#6F7482] font-medium mb-2'>{title}</p>
      </div>
      <div className='flex items-center bg-[#F4F4F5] rounded-[5px] py-3 pl-3'>
        <label className='flex items-center cursor-pointer'>
          <input type='checkbox' checked={isPaymentOn} onChange={handleToggle} className='hidden' />
          <div
            className={clsx('toggle-switch relative w-10 h-5 rounded-full p-1', {
              'bg-gray-300': !isPaymentOn,
              'bg-[#6231F4]': isPaymentOn
            })}
          >
            <div
              className={`toggle-slider absolute w-3 h-3 bg-white rounded-full transform transition-transform duration-300 ${
                isPaymentOn ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </div>
        </label>
        <div className='ml-4'>
          <p
            className={clsx({
              'text-gray-700': isPaymentOn,
              'text-gray-400': !isPaymentOn
            })}
          >
            {text || `Payment Option ${isPaymentOn ? 'On' : 'Off'} `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;

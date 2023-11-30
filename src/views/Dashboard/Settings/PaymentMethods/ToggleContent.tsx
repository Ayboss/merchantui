import React, { useState } from 'react';

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
          <div className='toggle-switch relative w-10 h-5 bg-gray-300 rounded-full p-1'>
            <div
              className={`toggle-slider absolute w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${
                isPaymentOn ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </div>
        </label>
        <div className='ml-4'>
          <p className={`text-${isPaymentOn ? 'gray-700' : 'gray-400'}`}>
            {text || `Payment Option ${isPaymentOn ? 'On' : 'Off'} `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;

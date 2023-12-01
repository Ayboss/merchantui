import React, { useState } from 'react';

interface PasswordItemProps {
  label: string;
}

const PasswordItem: React.FC<PasswordItemProps> = ({ label }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <p className='font-medium text-[10px] text-[#6F7482] mb-2'>{label} </p>
      <div className='relative mb-4'>
        <input
          className='w-full border border-gray-300 p-2 rounded-md '
          type={isTextVisible ? 'text' : 'password'}
        />
        <button onClick={toggleVisibility} className='absolute right-2 top-2 cursor-pointer'>
          {isTextVisible ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default PasswordItem;

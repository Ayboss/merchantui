import React, { useState } from 'react';
import BorderDivider from '../BorderDIvider';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleVisibility = () => {
    setIsTextVisible((prev) => !prev);
  };

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white  rounded-md w-[600px] h-[530px]'>
        <h3 className='text-[#444] text-[21px] font-bold mt-8 ml-10'>Change Password</h3>
        <BorderDivider />
        <div className='mx-10 pt-7 mb-10'>
          {/* <p className='mb-2'>{isTextVisible ? 'Password' : '*********'}</p> */}
          <p className='font-medium text-[10px] text-[#6F7482] mb-2'> Current Password </p>
          <div className='relative mb-4'>
            <input
              type={isTextVisible ? 'text' : 'password'}
              className='w-full border border-gray-300 p-2 rounded-md'
            />
            <button onClick={toggleVisibility} className='absolute right-2 top-2 cursor-pointer'>
              {isTextVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <p className='font-medium text-[10px] text-[#6F7482] mb-2'> New Password </p>
          <div className='relative mb-4'>
            <input
              type={isTextVisible ? 'text' : 'password'}
              className='w-full border border-gray-300 p-2 rounded-md'
            />
            <button onClick={toggleVisibility} className='absolute right-2 top-2 cursor-pointer'>
              {isTextVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <p className='font-medium text-[10px] text-[#6F7482] mb-2'> Confirm Password </p>
          <div className='relative mb-4'>
            <input
              type={isTextVisible ? 'text' : 'password'}
              className='w-full border border-gray-300 p-2 rounded-md'
            />
            <button onClick={toggleVisibility} className='absolute right-2 top-2 cursor-pointer'>
              {isTextVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <BorderDivider />
        <button
          onClick={onClose}
          className='p-2 bg-[#6231F4] w-[200px] h-[50px] text-white rounded-md ml-10 mt-7'
        >
          Save New Password
        </button>
      </div>
    </div>
  );
};

export default Modal;

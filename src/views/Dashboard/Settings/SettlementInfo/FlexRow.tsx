import React from 'react';

interface FlexRowProps {
  leftItem: React.ReactNode;
  rightItem: React.ReactNode;
}

const FlexRow: React.FC<FlexRowProps> = ({ leftItem, rightItem }) => {
  return (
    <div className='flex justify-between items-center mb-5'>
      <p className='text-[#A1A1AA] text-[14px] font-normal'>{leftItem}</p>
      <p className='text-[#444] text-[14px] font-medium'>{rightItem}</p>
    </div>
  );
};

export default FlexRow;

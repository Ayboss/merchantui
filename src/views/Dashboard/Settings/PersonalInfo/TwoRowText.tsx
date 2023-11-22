import React from 'react';

interface TwoRowTextProps {
  label: string;
  value: string | undefined;
}

const TwoRowText: React.FC<TwoRowTextProps> = ({ label, value }) => {
  return (
    <div className='mb-6'>
      <label className='text-[10px] text-[#6F7482] font-medium mb-1'>{label}</label>
      <p className='bg-[#FAFAFB] w-full border border-solid border-[#F5F6FA] rounded p-2 text-[#444444]'>
        {value}
      </p>
    </div>
  );
};

export default TwoRowText;

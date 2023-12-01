import React from 'react';

interface TwoRowTextProps {
  label: string;
  value: string;
  image?: string;
  render?: JSX.Element;
}

const TwoRowText: React.FC<TwoRowTextProps> = ({ label, value, image, render }) => {
  return (
    <div className='mb-6'>
      <label className='text-[10px] text-[#6F7482] font-medium mb-1'>{label}</label>
      <div className='flex items-center justify-between bg-[#FAFAFB] w-full border border-solid border-[#F5F6FA] rounded p-2'>
        <p className=' text-[#444444]'>{value}</p>
        {image && (
          <img src={image} style={{ fill: '#6231F4' }} alt='Image' className='ml-4 h-8 w-8 ' />
        )}
        {render}
      </div>
    </div>
  );
};

export default TwoRowText;

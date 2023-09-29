import React, { useState } from 'react';
import clsx from 'clsx';
import { Button } from '../../../components';
import { cn } from '../../../utils';
import { ChildComponentsDefaultProps } from '..';

const BusinessTypes: Omit<BusinessItemRadioPropType, 'onClick' | 'isActive'>[] = [
  {
    title: 'Individual Business',
    text: 'Tailored for solo entrepreneurs and independent sellers. This option allows you to seamlessly manage your business transactions.'
  },
  {
    title: 'Limited Company',
    text: "This option provides a robust platform for secure transactions and elevates your company's financial operations"
  },
  {
    title: 'SME (Small & Medium Enterprise)',
    text: 'This option allows you to efficiently process payments while focusing on expanding your business.'
  },
  {
    title: 'NGO (Non-Governmental Organisation)',
    text: 'This option allows you to receive contributions securely, manage disbursements, and transparently showcase your organisation’s transactions'
  }
];

export const ChooseBusinessType: React.FC<Partial<ChildComponentsDefaultProps>> = ({
  handleNext
}) => {
  const [activeBox, setActiveBox] = useState(-1);

  return (
    <div className='w-full flex flex-col items-start gap-5'>
      {BusinessTypes.map((item, index) => (
        <BusinessItemRadio
          isActive={activeBox === index}
          onClick={() => setActiveBox(index)}
          key={item.title}
          {...item}
        />
      ))}

      <Button
        onClick={handleNext}
        name='Choose Business Type'
        className='max-w-[180px] h-[50px] text-[12px] font-medium mb-[30px]'
      />
    </div>
  );
};

type BusinessItemRadioPropType = {
  title: string;
  text: string;
  onClick: () => void;
  isActive: boolean;
};
export const BusinessItemRadio: React.FC<BusinessItemRadioPropType> = ({
  title,
  text,
  onClick,
  isActive
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        clsx(
          'bg-white border-[2px] p-[13px] items-start border-gray-200 rounded-lg relative h-24 w-full flex gap-[15px] cursor-pointer',
          isActive && 'border-[#4A3AFF]'
        )
      )}
    >
      <input
        type='radio'
        onChange={onClick}
        checked={isActive}
        className='h-3 w-3 border-[#B8BCCA] cursor-pointer'
      />
      <div className='flex flex-col gap-1'>
        <h3 className='text-[#444] text-[15px] font-semibold leading-none '>{title}</h3>
        <p className='text-[#444] text-[12px] font-normal'>{text}</p>
      </div>
    </div>
  );
};

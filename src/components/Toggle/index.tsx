import React from 'react';
import Toggle, { ToggleProps } from 'react-toggle';
import 'react-toggle/style.css';

export type TogglePropsType = {
  isChecked: boolean;
  onChange: (value?: any) => void;
  labelText: string;
};

export const PayonusToggle: React.FC<TogglePropsType & ToggleProps> = ({
  labelText,
  isChecked = false,
  onChange,
  ...rest
}) => {
  return (
    <label className=' gap-2 flex items-center cursor-pointer'>
      <span className='text-[#444] font-normal text-[14px]'>{labelText}</span>
      <Toggle defaultChecked={isChecked} onChange={onChange} {...rest} />
    </label>
  );
};

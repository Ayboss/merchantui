import React from 'react';
import { CountrySelect, StateSelect } from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';
import clsx from 'clsx';
import { cn } from '../../utils';
import { CountrySelectProps } from './type';

export const CountrySelectInput: React.FC<CountrySelectProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  type,
  countryId
}) => {
  return (
    <div className='flex flex-col w-full gap-[5px] relative'>
      <label className='text-[10px] font-medium text-[#6F7482] tracking-[0.1px]'>{label}</label>
      {type === 'country' ? (
        <CountrySelect
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            clsx(
              'h-[48px] placeholder:text-[#B8BCCA] placeholder:text-[14px] placeholder:tracking-[0.14px] w-full border-[#B8BCCA] border-[1px] rounded text-[#3B4256] bg-white text-[14px] leading-[17px] font-normal p-3 focus:outline-[#6231F4]',
              className
            )
          )}
        />
      ) : (
        <StateSelect
          onChange={onChange}
          value={value}
          countryid={countryId}
          placeholder={placeholder}
          className={cn(
            clsx(
              'h-[48px] placeholder:text-[#B8BCCA] placeholder:text-[14px] placeholder:tracking-[0.14px] w-full border-[#B8BCCA] border-[1px] rounded text-[#3B4256] bg-white text-[14px] leading-[17px] font-normal p-3 focus:outline-[#6231F4]',
              className
            )
          )}
        />
      )}
    </div>
  );
};

export default CountrySelectInput;
